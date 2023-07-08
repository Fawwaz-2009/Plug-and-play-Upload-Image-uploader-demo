import Image from "next/image";
import { Inter } from "next/font/google";
import UploadCare from "@/components/uploader/uploadCare";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-white text-center text-4xl">Upload Care test</h1>
      <UploadCare configsOverrides={{ locale: "ar", name: "uploader-1" }} />
      <UploadCare configsOverrides={{ locale: "ar", name: "uploader-2" }} />
    </main>
  );
}
