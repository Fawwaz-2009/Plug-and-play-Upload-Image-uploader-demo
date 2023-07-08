export type Locales = "en" | "ar";

export type UploadCareConfig = {
  pubkey: string;
  name?: string;
  imgOnly?: 1 | 0;
  multiple?: 1 | 0;
  maxLocalFileSizeBytes?: number;
  useCloudImageEditor?: 1 | 0;
  sourceList: ("local" | "url" | "camera" | "dropbox" | "facebook" | "gdrive" | "gphotos" | "instagram")[];
  darkmode?: 0;
  locale?: Locales;
};

export interface UploadCareFile {
  uuid: string;
  name: string;
  size: number;
  mimeType: string;
  cdnUrl: string;
  originalFilename: string;
  contentInfo: {
    mime: {
      mime: string;
      type: string;
      subtype: string;
    };
    image: {
      dpi: null;
      width: number;
      format: string;
      height: number;
      sequence: boolean;
      colorMode: string;
      orientation: null;
      geoLocation: null;
      datetimeOriginal: null;
    };
  };
}
