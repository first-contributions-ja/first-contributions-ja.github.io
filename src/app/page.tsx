import Image from "next/image";
import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SITE_NAME } from "../../lib/constants";

export default function Home() {
  return (
    <>
      <section className=" mx-auto flex w-11/12 max-w-7xl items-center justify-center lg:h-screen lg:gap-16">
        <div className=" mb-[60px] mt-[100px] lg:flex-1">
          <p className="inline-block bg-stone-200 px-4 py-2">
            <span className="text-2xl font-bold text-red-600">1234</span>
            人が参加中
          </p>

          <p className="mt-4 text-2xl font-bold lg:text-3xl">
            誰でも簡単に
            <br />
            コントリビューション体験
          </p>
          <h2 className="mt-4 inline-block bg-red-600 px-4 py-2 text-5xl font-bold text-white">
            {SITE_NAME}
          </h2>
          <div className="text-md mt-6 lg:mt-4 lg:text-lg">
            <p>完全日本語のコントリビューション体験リポジトリです。</p>
            <p>
              フォーク、クローン、コミット、プルリクを行うことでOSSプロジェクト貢献方法を学べます。
            </p>
          </div>
        </div>
        <div className="flex-[0.8]">
          <Image
            src={`${BASE_PATH}/logo.svg`}
            width={640}
            height={324}
            alt="logo"
            className="hidden w-full lg:inline-block"
          />
        </div>
      </section>
      <div className="mx-auto my-4 flex w-[80px] lg:hidden">
        <Image
          src={`${BASE_PATH}/logo.svg`}
          width={640}
          height={324}
          alt="logo"
          className=""
        />
      </div>
      <section className="px-6 py-12 lg:bg-red-600 lg:px-10">
        <div className="rounded-xl bg-stone-100 lg:p-20">
          <h2 className="text-center text-xl font-bold tracking-tighter text-red-600 lg:text-3xl">
            簡単７ステップでコントリビューション！
          </h2>
          <ol className="mx-auto mb-6 mt-8 max-w-[460px] list-inside list-decimal leading-loose lg:mb-8 lg:mt-10 lg:text-xl lg:font-bold lg:leading-loose">
            <li>プロジェクトをフォークする</li>
            <li>ローカルリポジトリにクローンする</li>
            <li>ブランチを作成する</li>
            <li>ソースコードを変更！</li>
            <li>コミットメッセージを添えてコミットする</li>
            <li>コミット内容をプッシュする</li>
            <li>プルリクエストを作成する</li>
          </ol>
          <div className="mb-8 text-center leading-loose lg:mb-16 lg:text-xl lg:font-bold lg:leading-loose">
            <p className="mb-4 text-4xl text-red-600 lg:mb-8 ">⬇︎</p>
            <p>マージされると……</p>
            <p>あなたの変更がメインプロジェクトに反映されます 🎉</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
              className="rounded-xl bg-red-600 px-5 py-4 text-white transition hover:opacity-70 lg:text-lg"
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
