import Image from "next/image";
import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SITE_NAME } from "../../lib/constants";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";

export default function Home() {
  return (
    <>
      <section className=" mx-auto mt-20 lg:mt-4 lg:-mb-4 max-w-2xl px-6 lg:flex lg:h-screen lg:max-w-7xl lg:items-center  lg:gap-10">
        <div className="lg:flex-1">
          <p className="hidden bg-stone-200 px-4 py-2 lg:inline-block">
            <span className="text-2xl font-bold text-red-600">1234</span>
            人が参加中！
          </p>
          <div className="my-4 w-full lg:hidden">
            <Image
              src={`${BASE_PATH}/logo.svg`}
              width={640}
              height={324}
              alt="logo"
              className="mx-auto w-[70%] max-w-[400px]"
            />
          </div>
          <p className="mt-4 text-2xl font-bold lg:text-3xl">
            誰でも簡単に
            <br />
            コントリビューション体験 🚀
          </p>
          <h2 className="mt-4 inline-block hidden bg-red-600 px-4 py-2 text-5xl font-bold text-white lg:inline-block">
            {SITE_NAME}
          </h2>
          <div className="mt-6 text-sm leading-relaxed lg:mt-4 lg:text-lg">
            <p>
              初心者でも簡単に参加できる日本語のオープンソースプロジェクトです。
            </p>
            <p>
              Git/GitHubの実践的な使い方や、オープンソースでコラボレーションする作法を学べます
              🌟
            </p>
          </div>
        </div>
        <div className="hidden lg:inline-block lg:flex-[0.8]">
          <Image
            src={`${BASE_PATH}/logo.svg`}
            width={640}
            height={324}
            alt="logo"
            className="w-full"
          />
        </div>
        <p className="mx-auto mb-10 mt-5 rounded-sm bg-stone-200 px-4 py-2 text-center lg:hidden">
          <span className="text-2xl font-bold text-red-600">1234</span>
          人が参加中！
        </p>
      </section>

      <section className="bg-red-600 p-6 pt-8  pb-0 md:px-10 md:pt-10">
        <div className="rounded-md bg-stone-100 px-5 pt-12 pb-16 md:p-20 md:pt-8">
          <h2 className="text-center text-xl font-bold tracking-tighter md:pt-12 md:pb-4 md:text-3xl text-red-600">
            簡単 8 STEP でコントリビューション！
          </h2>
          <ul className="rounded-md lg:bg-stone-200 lg:px-12 lg:pt-8 lg:pb-4 lg:flex lg:gap-16 mx-auto w-fit mt-8 px-2 list-inside font-bold lg:mb-8 lg:mt-10 text-lg md:text-xl md:leading-loose">
            <div>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 1</p>
                プロジェクトをフォーク
              </li>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 2</p>
                ローカルマシンへクローン
              </li>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 3</p>
                作業用ブランチを作成
              </li>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 4</p>
                変更を加える
              </li>
            </div>
            <div>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 5</p>
                変更をコミット
              </li>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 6</p>
                変更をプッシュ
              </li>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 7</p>
                プルリクエストを作成
              </li>
              <li className="pb-4">
                <p className="mr-6 text-red-600 text-sm md:text-lg">STEP 8</p>
                レビューとフィードバックに対応
              </li>
            </div>
          </ul>
          <div className="mb-8 text-center font-bold leading-7 md:text-xl md:leading-loose">
            <KeyboardDoubleArrowDownRoundedIcon className="mb-4 text-6xl text-red-600" />
            <p>プルリクエストが承認されると</p>
            <p>あなたの変更がメインプロジェクトに反映されます 🎉</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
              className="rounded-md bg-red-600 px-5 py-4 text-white transition hover:opacity-70 lg:text-lg"
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
