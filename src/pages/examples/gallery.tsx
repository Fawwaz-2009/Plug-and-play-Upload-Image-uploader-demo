import { useState, FormEvent } from "react";
import { UploadCareFile } from "@/components/uploader/types";
import Link from "next/link";
import FunBackground from "@/components/uploader/FunBackground";
import GalleryUploader from "@/components/uploader/examples/gallery";

const GalleryForm = () => {
  const [images, setImages] = useState<UploadCareFile[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (images.length === 0) return alert("Please upload at least one image");
    const payload = {
      images: images.map((image) => image.cdnUrl),
    };
    alert(`Form submitted with payload: ${JSON.stringify(payload)}`);
  };

  return (
    <FunBackground>
      <div className="p-6  text-left">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to home
        </Link>
      </div>
      <main className="grid justify-items-center">
        <h1 className="text-4xl my-20">Gallery Example</h1>
        <form onSubmit={handleSubmit} className="col-span-full">
          <GalleryUploader images={images} setImages={setImages} />
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow">
            Submit
          </button>
        </form>
      </main>
    </FunBackground>
  );
};

export default GalleryForm;
