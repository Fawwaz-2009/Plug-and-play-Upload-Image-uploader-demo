import { Locales, locals } from "./locals";

type UploadCareConfig = {
  pubkey: string;
  imgOnly?: 1 | 0;
  multiple?: 1 | 0;
  maxLocalFileSizeBytes?: number;
  useCloudImageEditor?: 1 | 0;
  sourceList: ("local" | "url" | "camera" | "dropbox" | "facebook" | "gdrive" | "gphotos" | "instagram")[];
  darkmode?: 0;
  locale?: Locales;
};

const defaultUploadCareConfigs = {
  pubkey: "demopublickey",
  imgOnly: 1,
  multiple: 1,
  maxLocalFileSizeBytes: 10000000,
  useCloudImageEditor: 0,
  sourceList: ["local", "url", "camera", "dropbox", "facebook", "gdrive", "gphotos", "instagram"],
  darkmode: 0,
  locale: "en",
} satisfies UploadCareConfig;

export function createUploadCareConfig(config: UploadCareConfig) {
  const { pubkey, imgOnly, multiple, maxLocalFileSizeBytes, useCloudImageEditor, sourceList, darkmode, locale } = { ...defaultUploadCareConfigs, ...config };
  const sourceListString = sourceList.join(", ");

  return `
        --ctx-name: "uploader";
        --cfg-pubkey: "${pubkey}";
        --cfg-img-only: ${imgOnly};
        --cfg-multiple: ${multiple};
        --cfg-max-local-file-size-bytes: ${maxLocalFileSizeBytes};
        --cfg-use-cloud-image-editor: ${useCloudImageEditor};
        --cfg-source-list: "${sourceListString}";
        --darkmode: ${darkmode};

        /* Locals */
        ${locals[locale]}
    `;
}