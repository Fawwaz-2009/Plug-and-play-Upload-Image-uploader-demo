import { useState } from "react";
import { UploadCareFile } from "../types";
import Uploader from "../uploadCare";
import UploadCareImage from "../uploadCareImage";
import Image from "next/image";

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ avatar, setAvatar }) => {
  // little hack to clean uploader when avatar is deleted
  const [uploaderName, setUploaderName] = useState<string>(`avatar-${Math.random()}`);

  const handleAvatarUpload = (files: UploadCareFile[]) => {
    if (files.length > 0) {
      setAvatar(files[0]);
    }
  };

  const handleAvatarDelete = () => {
    setUploaderName(`avatar-${Math.random()}`);
    setAvatar(null);
  };

  return (
    <div>
      <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
        Photo
      </label>
      <div className="mt-2 flex items-center gap-x-3">
        <div className="h-12 w-12 text-gray-300 flex items-center shadow-sm rounded-full border border-zinc-800 p-2">
          {avatar ? (
            <UploadCareImage src={avatar.cdnUrl} width={48} height={48} alt="User avatar" />
          ) : (
            <Image src="/placeholder.png" alt="Vercel Logo" className="" width={48} height={48} priority />
          )}
        </div>
        <div className="flex gap-5 items-center">
          <Uploader key={uploaderName} configsOverrides={{ imgOnly: 1, multiple: 0, name: uploaderName }} setFiles={handleAvatarUpload} />
          {avatar && (
            <button
              type="button"
              className=" rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={handleAvatarDelete}
            >
              Delete Avatar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface AvatarUploaderProps {
  avatar: UploadCareFile | null;
  setAvatar: (uploadCareFile: UploadCareFile | null) => void;
}

export default AvatarUploader;
