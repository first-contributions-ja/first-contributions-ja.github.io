import Image from "next/image";
import { basePath } from "../../next.config";
const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SITE_NAME } from "../../lib/constants";

export default function Home() {
  return (
    <>
      <section className="border-box mx-auto flex h-screen w-11/12 max-w-7xl items-center justify-center gap-16">
        <div className="flex-1">
          <p className="inline-block bg-zinc-100 px-4 py-2">
            <span className="text-2xl font-bold text-red-600">1234</span>
            人が参加中
          </p>
          <p className="mt-4 text-3xl font-bold">
            誰でも簡単に
            <br />
            コントリビューション体験
          </p>
          <h2 className="mt-4 inline-block bg-red-600 px-4 py-2 text-5xl font-bold text-white">
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
        <div className="rounded-xl bg-white p-20">
          <h2 className="text-center text-4xl font-bold tracking-tighter text-red-600">
            簡単７ステップでコントリビューション！
          </h2>
          <ol className="mx-auto mb-8 mt-10 max-w-[500px] list-inside list-decimal text-2xl font-bold leading-loose">
            <li>プロジェクトをフォークする</li>
            <li>ローカルリポジトリにクローンする</li>
            <li>ブランチを作成する</li>
            <li>ソースコードを変更！</li>
            <li>コミットメッセージを添えてコミットする</li>
            <li>コミット内容をプッシュする</li>
            <li>プルリクエストを作成する</li>
          </ol>
          <div className="mb-16 text-center text-2xl font-bold leading-relaxed">
            <p className="mb-8 text-4xl text-red-600">⬇︎</p>
            <p>マージされると……</p>
            <p>🎉 あなたの変更がメインプロジェクトに反映されます 🎉</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
              className="rounded-xl bg-red-600 px-5 py-4 text-lg text-white transition hover:opacity-70"
            >
              <GitHubIcon fontSize="large" className="mr-3 -translate-y-0.5" />
              詳しい手順はこちら
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
