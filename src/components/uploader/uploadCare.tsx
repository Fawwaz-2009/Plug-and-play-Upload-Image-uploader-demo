import { useCallback, useRef, useEffect, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { PACKAGE_VERSION } from "@uploadcare/blocks/env";
import { createUploadCareConfig } from "./uploaderConfigs";
import { UploadCareConfig, UploadCareFile } from "./types";

LR.registerBlocks(LR);

const Uploader: React.FC<UploaderProps> = ({ configsOverrides, setFiles }) => {
  const dataOutputRef = useRef<LR.DataOutput>();

  //   This is to make sure that each uploader instance doesn't clash with the other
  const uniqueClass = useMemo(() => `uploaderCfg-${Math.random().toString(36).slice(2)}`, []);

  // TODO: We need to export all the event types
  const handleUploaderEvent = useCallback(
    (e: CustomEvent<{ data: UploadCareFile[] }>) => {
      const { data } = e.detail;
      setFiles && setFiles(data);
    },
    [setFiles]
  );

  useEffect(() => {
    const el = dataOutputRef.current;

    // TODO: Augment global custom event types
    el?.addEventListener("lr-data-output", handleUploaderEvent as EventListenerOrEventListenerObject);
    return () => {
      el?.removeEventListener("lr-data-output", handleUploaderEvent as EventListenerOrEventListenerObject);
    };
  }, [handleUploaderEvent]);

  return (
    <div className="">
      <lr-file-uploader-regular class={uniqueClass} css-src={`https://unpkg.com/@uploadcare/blocks@${PACKAGE_VERSION}/web/file-uploader-regular.min.css`}>
        <lr-data-output ref={dataOutputRef} use-event hidden class={uniqueClass} onEvent={handleUploaderEvent}></lr-data-output>
      </lr-file-uploader-regular>

      <style jsx global>{`
        .${uniqueClass} {
          ${createUploadCareConfig({
            pubkey: "demopublickey",
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
  setFiles?: (files: UploadCareFile[]) => void;
}

export default Uploader;
