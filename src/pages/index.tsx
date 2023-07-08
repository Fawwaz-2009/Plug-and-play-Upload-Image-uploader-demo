import { Inter } from "next/font/google";
import UploadCare from "@/components/uploader/uploadCare";
import { useState } from "react";
import UploadCareImage from "@/components/uploader/uploadCareImage";
import { UploadCareFile } from "@/components/uploader/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [files, setFiles] = useState<UploadCareFile[]>([]);
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-white text-center text-4xl">Upload Care test</h1>
      <UploadCare configsOverrides={{ locale: "ar", name: "uploader-1" }} setFiles={setFiles} />
      <div className={"grid gap-2 grid-cols-autoFitMin200pxMax1fr w-full max-w-4xl"}>
        {files.map((file) => (
          <UploadCareImage key={file.uuid} src={file.cdnUrl} width="200" height="200" alt="Preview" />
        ))}
      </div>
    </main>
  );
}
