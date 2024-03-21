import Image from "next/image";
import { basePath } from "../../next.config";
const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from '@mui/icons-material/GitHub';
import { SITE_NAME } from "../../lib/constants";

export default function Home() {
  return (
    <>
      <section className="flex justify-center max-w-7xl w-11/12 mx-auto gap-16 border-box h-screen items-center">
        <div className="flex-1">
          <p className="bg-zinc-100 inline-block px-4 py-2">
            <span className="text-2xl font-bold text-red-600">1234</span>
            人が参加中
          </p>
          <p className="text-3xl font-bold mt-4">
            誰でも簡単に
            <br />
            コントリビューション体験
          </p>
          <h2 className="bg-red-600 text-white text-5xl inline-block px-4 py-2 font-bold mt-4">
            {SITE_NAME}
          </h2>
          <p className="mt-4">
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
          <h2 className="text-red-600 text-4xl font-bold text-center tracking-tighter">簡単７ステップでコントリビューション！</h2>
          <ol className="list-decimal list-inside text-2xl font-bold mt-10 mb-8 leading-loose max-w-[500px] mx-auto">
            <li>プロジェクトをフォークする</li>
            <li>ローカルリポジトリにクローンする</li>
            <li>ブランチを作成する</li>
            <li>ソースコードを変更！</li>
            <li>コミットメッセージを添えてコミットする</li>
            <li>コミット内容をプッシュする</li>
            <li>プルリクエストを作成する</li>
          </ol>
          <div className="text-center font-bold text-2xl leading-relaxed mb-16">
            <p className="text-4xl text-red-600 mb-8">⬇︎</p>
            <p>マージされると……</p>
            <p>🎉 あなたの変更がメインプロジェクトに反映されます 🎉</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
              className="bg-red-600 text-white text-lg px-5 py-4 rounded-xl hover:opacity-70 transition">
              <GitHubIcon fontSize="large" className="mr-3 -translate-y-0.5" />
              詳しい手順はこちら</a>
          </div>
        </div>
      </section>
    </>
  );
}
