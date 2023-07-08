import { useState, useCallback, useRef, useEffect } from "react";
import * as LR from "@uploadcare/blocks";
import { PACKAGE_VERSION } from "@uploadcare/blocks/env";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { createUploadCareConfig } from "./uploaderConfigs";
import { Locales } from "./locals";

LR.registerBlocks(LR);

const Uploader: React.FC<UploaderProps> = ({ locale }) => {
  const dataOutputRef = useRef<LR.DataOutput>();
  // TODO: We need to export all data output types
  const [files, setFiles] = useState<any[]>([]);

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
      <lr-file-uploader-regular class="uploaderCfg" css-src={`https://unpkg.com/@uploadcare/blocks@${PACKAGE_VERSION}/web/file-uploader-regular.min.css`}>
        <lr-data-output ref={dataOutputRef} use-event hidden class="uploaderCfg" onEvent={handleUploaderEvent}></lr-data-output>
      </lr-file-uploader-regular>

      <div className={"grid gap-2 grid-cols-autoFitMin200pxMax1fr w-full max-w-4xl"}>
        {files.map((file) => (
          <Image
            key={file.uuid}
            src={`https://ucarecdn.com/${file.uuid}/${file.cdnUrlModifiers || ""}-/preview/-/scale_crop/400x400/`}
            width="200"
            height="200"
            alt="Preview"
            loader={uploadcareLoader}
          />
        ))}
      </div>
      <style jsx global>{`
        .uploaderCfg {
          ${createUploadCareConfig({
            pubkey: "4a193e597cec18c6877b",
            sourceList: ["local", "url"],
            locale: locale || "en",
          })}
        }
      `}</style>
    </div>
  );
};

interface UploaderProps {
  locale?: Locales;
}

export default Uploader;
