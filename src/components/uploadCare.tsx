import { useState, useCallback, useRef, useEffect } from "react";
import * as LR from "@uploadcare/blocks";
import { PACKAGE_VERSION } from "@uploadcare/blocks/env";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

LR.registerBlocks(LR);

const Uploader: React.FC = () => {
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
          --ctx-name: "uploader";
          --cfg-pubkey: "4a193e597cec18c6877b";
          --cfg-multiple: 1;
          --cfg-confirm-upload: 1;
          --cfg-img-only: 0;
          --cfg-accept: "";
          --cfg-store: 1;
          --cfg-camera-mirror: 0;
          --cfg-source-list: "local, url, camera, dropbox, gdrive";
          --cfg-max-files: 10;

          /* locals overrides */
          --l10n-locale-name: "en-US";
          --l10n-upload-file: "Upload file";
          --l10n-upload-files: "Upload files";
          --l10n-choose-file: "Choose file";
          --l10n-choose-files: "Choose files";
          --l10n-drop-files-here: "Drop files here";
          --l10n-select-file-source: "Select file source";
          --l10n-selected: "Selected";
          --l10n-upload: "Upload";
          --l10n-add-more: "Add more";
          --l10n-cancel: "Cancel";
          --l10n-clear: "Clear";
          --l10n-camera-shot: "Shot";
          --l10n-upload-url: "Import";
          --l10n-upload-url-placeholder: "Paste link here";
          --l10n-edit-image: "Edit image";
          --l10n-edit-detail: "Details";
          --l10n-back: "Back";
          --l10n-done: "Done";
          --l10n-ok: "Ok";
          --l10n-remove-from-list: "Remove";
          --l10n-no: "No";
          --l10n-yes: "Yes";
          --l10n-confirm-your-action: "Confirm your action";
          --l10n-are-you-sure: "Are you sure?";
          --l10n-selected-count: "Selected:";
          --l10n-upload-error: "Upload error";
          --l10n-validation-error: "Validation error";
          --l10n-no-files: "No files selected";
          --l10n-browse: "Browse";
          --l10n-not-uploaded-yet: "Not uploaded yet...";
          --l10n-file__one: "file";
          --l10n-file__other: "files";
          --l10n-error__one: "error";
          --l10n-error__other: "errors";
          --l10n-header-uploading: "Uploading {{count}} {{plural:file(count)}}";
          --l10n-header-failed: "{{count}} {{plural:error(count)}}";
          --l10n-header-succeed: "{{count}} {{plural:file(count)}} uploaded";
          --l10n-header-total: "{{count}} {{plural:file(count)}} selected";

          --l10n-src-type-local: "From device";
          --l10n-src-type-from-url: "From link";
          --l10n-src-type-camera: "Camera";
          --l10n-src-type-draw: "Draw";
          --l10n-src-type-facebook: "Facebook";
          --l10n-src-type-dropbox: "Dropbox";
          --l10n-src-type-gdrive: "Google Drive";
          --l10n-src-type-gphotos: "Google Photos";
          --l10n-src-type-instagram: "Instagram";
          --l10n-src-type-flickr: "Flickr";
          --l10n-src-type-vk: "VK";
          --l10n-src-type-evernote: "Evernote";
          --l10n-src-type-box: "Box";
          --l10n-src-type-onedrive: "Onedrive";
          --l10n-src-type-huddle: "Huddle";
          --l10n-src-type-other: "Other";

          --l10n-src-type: var(--l10n-src-type-local);

          --l10n-caption-from-url: "Import from link";
          --l10n-caption-camera: "Camera";
          --l10n-caption-draw: "Draw";
          --l10n-caption-edit-file: "Edit file";

          --l10n-file-no-name: "No name...";

          --l10n-toggle-fullscreen: "Toggle fullscreen";
          --l10n-toggle-guides: "Toggle guides";
          --l10n-rotate: "Rotate";
          --l10n-flip-vertical: "Flip vertical";
          --l10n-flip-horizontal: "Flip horizontal";
          --l10n-brightness: "Brightness";
          --l10n-contrast: "Contrast";
          --l10n-saturation: "Saturation";
          --l10n-resize: "Resize image";
          --l10n-crop: "Crop";
          --l10n-select-color: "Select color";
          --l10n-text: "Text";
          --l10n-draw: "Draw";
          --l10n-cancel-edit: "Cancel edit";

          --l10n-tab-view: "Preview";
          --l10n-tab-details: "Details";

          --l10n-file-name: "Name";
          --l10n-file-size: "Size";
          --l10n-cdn-url: "CDN URL";
          --l10n-file-size-unknown: "Unknown";

          --l10n-camera-permissions-denied: "Camera access denied";
          --l10n-camera-permissions-prompt: "Please allow access to the camera";
          --l10n-camera-permissions-request: "Request access";

          --l10n-files-count-limit-error-title: "Files count limit overflow";
          --l10n-files-count-limit-error-too-few: "You’ve chosen {{total}}. At least {{min}} required.";
          --l10n-files-count-limit-error-too-many: "You’ve chosen too many files. {{max}} is maximum.";

          --l10n-files-max-size-limit-error: "File is too big. Max file size is {{maxFileSize}} bytes.";
          --l10n-has-validation-errors: "File validation error ocurred. Please, check your files before upload.";
          --l10n-images-only-accepted: "Only image files are accepted.";
          --l10n-file-type-not-allowed: "Uploading of these file types is not allowed.";
        }
      `}</style>
    </div>
  );
};

export default Uploader;
