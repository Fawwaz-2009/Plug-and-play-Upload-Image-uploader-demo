import { useState } from "react";
import { UploadCareFile } from "../types";
import Uploader from "../uploadCare";
import UploadCareImage from "../uploadCareImage";
import Image from "next/image";

const GalleryUploader: React.FC<GalleryUploaderProps> = ({ images, setImages }) => {
  // little hack to clean uploader when avatar is deleted
  const [uploaderName, setUploaderName] = useState<string>(`avatar-${Math.random()}`);

  const handleAvatarUpload = (files: UploadCareFile[]) => {
    if (files.length > 0) {
      setImages(files);
    }
  };

  return (
    <div className="lg:w-[50rem] mx-auto">
      <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
        Gallery
      </label>
      <div className="mt-2 flex items-center gap-x-3">
        {images && images.length > 0 ? (
          <>
            {images.map((image, index) => (
              <div className="" key={index}>
                <div className="relative w-48 h-48 bg-zinc-800/25 rounded-md overflow-hidden">
                  <UploadCareImage src={image.cdnUrl} alt="Gallery Image" width={500} height={500} className="rounded" />
                </div>
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded-md w-full my-2"
                  onClick={() => {
                    const newImages = [...images];
                    newImages.splice(index, 1);
                    setImages(newImages);
                    setUploaderName(`avatar-${Math.random()}`);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        ) : null}
      </div>
      <div className="mt-5 mb-4">
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <Uploader key={uploaderName} configsOverrides={{ imgOnly: 1, multiple: 1, name: uploaderName }} setFiles={handleAvatarUpload} />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GalleryUploaderProps {
  images: UploadCareFile[];
  setImages: (uploadCareFiles: UploadCareFile[]) => void;
}

export default GalleryUploader;
