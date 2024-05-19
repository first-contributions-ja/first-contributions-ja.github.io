import Image from "next/image";
import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SITE_NAME } from "../../lib/constants";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import contributors from "../../Contributors.json";
import GradientBackground from "@/components/gradient-background";
import ScreenEmojis from "@/components/screen-emojis";
import groupContributorsBySection from "@/utils/contributors-grouping";

export default function Home() {
  const contributorsNumber = contributors.length;
  const gradientColor = contributors[0].favoriteColor;
  const contributorsGroups = groupContributorsBySection(contributors, 3);

  return (
    <>
      <section className="mx-auto mt-20 max-w-2xl px-6 lg:-mb-4 lg:mt-4 lg:flex lg:h-screen lg:max-w-7xl lg:items-center  lg:gap-10">
        <div className="lg:flex-1">
          <p className="hidden bg-stone-100 px-4 py-2 lg:inline-block">
            <span className="text-2xl font-bold text-red-600">
              {contributorsNumber}
            </span>
            人が参加中！
          </p>
          <div className="my-8 w-full lg:hidden">
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
          <h2 className="mt-4 hidden bg-red-600 px-4 py-2 text-5xl font-bold text-white lg:inline-block">
            {SITE_NAME}
          </h2>
          <div className="mt-4 text-sm leading-relaxed lg:text-lg">
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
        <p className="mx-auto mb-10 mt-5 rounded-sm bg-stone-100 px-4 py-2 text-center lg:hidden">
          <span className="text-2xl font-bold text-red-600">
            {contributorsNumber}
          </span>
          人が参加中！
        </p>
      </section>

      <GradientBackground mainColor={gradientColor}>
        <ScreenEmojis contributors={contributorsGroups[0]} isTopSection />
        <section className="mx-auto h-screen max-w-screen-xl">
          セクション1
        </section>

        <ScreenEmojis contributors={contributorsGroups[1]} />
        <section className="mx-auto h-screen max-w-screen-xl">
          セクション2
        </section>

        <ScreenEmojis contributors={contributorsGroups[2]} />
        <section className="bg-red-600 p-6 pb-0 pt-8 md:px-10 md:pt-10">
          <div className="rounded-md bg-white px-5 pb-16 pt-12 md:p-20 md:pt-8">
            <h2 className="text-center text-xl font-bold tracking-tighter text-red-600 md:pb-4 md:pt-12 md:text-3xl">
              簡単 8 STEP でコントリビューション！
            </h2>
            <ul className="mx-auto mt-8 w-fit list-inside rounded-md px-2 text-lg font-bold md:text-xl md:leading-7 lg:mb-8 lg:mt-10 lg:flex lg:gap-16 lg:bg-stone-100 lg:px-12 lg:pb-4 lg:pt-8">
              <div>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 1</p>
                  プロジェクトをフォーク
                </li>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 2</p>
                  ローカルマシンへクローン
                </li>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 3</p>
                  作業用ブランチを作成
                </li>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 4</p>
                  変更を加える
                </li>
              </div>
              <div>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 5</p>
                  変更をコミット
                </li>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 6</p>
                  変更をプッシュ
                </li>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 7</p>
                  プルリクエストを作成
                </li>
                <li className="pb-4 md:pb-6">
                  <p className="mr-6 text-sm text-red-600 md:text-lg">STEP 8</p>
                  レビューとフィードバックに対応
                </li>
              </div>
            </ul>
            <div className="mb-8 text-center font-bold leading-7 md:text-xl md:leading-8">
              <KeyboardDoubleArrowDownSharpIcon className="mb-4 text-6xl text-red-600" />
              <p>プルリクエストが承認されると</p>
              <p>あなたの変更がメインプロジェクトに反映されます 🎉</p>
            </div>
            <div className="text-center">
              <a
                href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
                className="rounded-md bg-red-600 px-3 py-3 text-sm text-white transition hover:opacity-70 md:px-5 md:py-4 md:text-lg"
              >
                <GitHubIcon className="mr-3 -translate-y-0.5 text-3xl md:text-4xl" />
                詳しい手順はこちら
              </a>
            </div>
          </div>
        </section>
      </GradientBackground>
      {/* tailwind のclassをCSSに含める */}
      <div className="hidden animate-[horizontal_3s_ease-in-out_infinite_alternate_both]">
        horizontal
      </div>
      <div className="hidden animate-[vertical_3s_ease-in-out_infinite_alternate_both]">
        vertical
      </div>
    </>
  );
}
