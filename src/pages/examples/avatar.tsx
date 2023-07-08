import { useState, FormEvent } from "react";
import { UploadCareFile } from "@/components/uploader/types";
import AvatarUploader from "@/components/uploader/examples/avatar";
import Link from "next/link";
import FunBackground from "@/components/uploader/FunBackground";

const UserProfile = () => {
  const [avatar, setAvatar] = useState<UploadCareFile | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!avatar) return alert("Please upload an avatar");
    const payload = {
      avatar: avatar.cdnUrl,
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
      <main className="grid justify-center">
        <h1 className="text-4xl my-20">Avatar Example</h1>
        <form onSubmit={handleSubmit} className="col-span-full">
          <AvatarUploader avatar={avatar} setAvatar={setAvatar} />
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow">
            Submit
          </button>
        </form>
      </main>
    </FunBackground>
  );
};

export default UserProfile;
