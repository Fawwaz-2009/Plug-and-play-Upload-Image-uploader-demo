import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { PACKAGE_VERSION } from "@uploadcare/blocks/env";
import { UploadCareConfig, createUploadCareConfig } from "./uploaderConfigs";
import UploadCareImage from "./uploadCareImage";

LR.registerBlocks(LR);

const Uploader: React.FC<UploaderProps> = ({ configsOverrides }) => {
  const dataOutputRef = useRef<LR.DataOutput>();
  // TODO: We need to export all data output types
  const [files, setFiles] = useState<any[]>([]);
  //   This is to make sure that each uploader instance doesn't clash with the other
  const uniqueClass = useMemo(() => `uploaderCfg-${Math.random().toString(36).slice(2)}`, []);

  console.log({ files });
  // TODO: We need to export all the event types
  const handleUploaderEvent = useCallback((e: CustomEvent<any>) => {
    const { data } = e.detail;
    setFiles(data);
  }, []);

  useEffect(() => {
    const el = dataOutputRef.current;

    // TODO: Augment global custom event types
    el?.addEventListener("lr-data-output", handleUploaderEvent as EventListenerOrEventListenerObject);
    return () => {
      el?.removeEventListener("lr-data-output", handleUploaderEvent as EventListenerOrEventListenerObject);
    };
  }, [handleUploaderEvent]);

  return (
    <div className="flex flex-col space-y-8 p-8">
      <lr-file-uploader-regular class={uniqueClass} css-src={`https://unpkg.com/@uploadcare/blocks@${PACKAGE_VERSION}/web/file-uploader-regular.min.css`}>
        <lr-data-output ref={dataOutputRef} use-event hidden class={uniqueClass} onEvent={handleUploaderEvent}></lr-data-output>
      </lr-file-uploader-regular>

      <div className={"grid gap-2 grid-cols-autoFitMin200pxMax1fr w-full max-w-4xl"}>
        {files.map((file) => (
          <UploadCareImage key={file.uuid} src={file.cdnUrl} width="200" height="200" alt="Preview" />
        ))}
      </div>
      <style jsx global>{`
        .${uniqueClass} {
          ${createUploadCareConfig({
            pubkey: "4a193e597cec18c6877b",
            sourceList: ["local", "url"],
            locale: "en",
            ...configsOverrides,
          })}
        }
      `}</style>
    </div>
  );
};

interface UploaderProps {
  configsOverrides?: Partial<UploadCareConfig>;
}

export default Uploader;
