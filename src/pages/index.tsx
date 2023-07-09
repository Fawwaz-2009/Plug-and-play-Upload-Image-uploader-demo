import FunBackground from "@/components/uploader/FunBackground";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <FunBackground>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">Plug and play file uploader implementation with UploadCare</h1>
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm  my-8 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  See the code in Github <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid justify-items-center auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-2">
              <Link
                className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] p-8 w-60 h-60"
                href="/examples/avatar"
              >
                <h3 className="text-2xl font-semibold leading-6 text-white">Avatar example</h3>
              </Link>
              <Link
                className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] p-8 w-60 h-60"
                href="/examples/gallery"
              >
                <h3 className="text-2xl font-semibold leading-6 text-white">Gallery example</h3>
              </Link>
            </div>
          </div>
        </div>
      </FunBackground>
    </div>
  );
}
