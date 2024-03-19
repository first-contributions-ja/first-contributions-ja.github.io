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
      <section className="bg-red-600 px-10 py-12">
        <div className="bg-white p-20 rounded-xl">
          <h2 className="text-red-600 text-4xl font-bold text-center">簡単７ステップでコントリビューション！</h2>
          <div className="text-2xl font-bold mt-10 mb-16 leading-loose max-w-[500px] mx-auto">
            <p>1. ローカルリポジトリにクローンする</p>
            <p>2. ブランチを作成する</p>
            <p>3. ソースコードを変更する</p>
            <p>4. 変更をコミットする</p>
            <p>5. コミット内容をプッシュする</p>
            <p>6. プルリクエストを作成する</p>
            <p>7. マージされるのを待つ</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
              className="bg-red-600 text-white text-lg px-4 py-3 rounded-xl hover:opacity-70 transition"
            >● 詳しい手順はこちら</a>
          </div>
        </div>
      </section>
    </>
  );
}
