import Head from "next/head";
import ColorPicker from "../components/ColorPicker";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Color Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-4xl text-gray-500">
            Random Color Picker
          </span>
        </div>
      </div>
      <ColorPicker />
    </div>
  );
}
