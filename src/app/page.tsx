import Image from "next/image";
import { basePath } from "../../next.config";
const BASE_PATH = basePath ? basePath : "";

export default function Home() {
  return (
    <>
      <section className="flex justify-center max-w-7xl w-11/12 mx-auto gap-16 border-box h-screen items-center">
        <div className="flex-1">
          <p
            className="bg-zinc-100 inline-block px-4 py-2">
            <span className="text-2xl font-bold text-red-600">
              1234
            </span>人が参加中
          </p>
          <p
            className="text-3xl font-bold mt-4">
            誰でも簡単に<br />コントリビューション体験
          </p>
          <h2
            className="bg-red-600 text-white text-5xl inline-block px-4 py-2 font-bold mt-4">first-contributions-ja</h2>
          <p
            className="mt-4">
            完全日本語のコントリビューション体験リポジトリです。フォーク、クローン、コミット、プルリクを行うことでOSSプロジェクト貢献方法を学べます。
          </p>
        </div>
        <div className="flex-[1.1]">
          <Image
            src={`${BASE_PATH}/peoples.svg`}
            width={640}
            height={324}
            alt="peoples"
            className="w-full"
          />
        </div>
      </section>
      <section>ABOUT</section>
    </>
  );
}
