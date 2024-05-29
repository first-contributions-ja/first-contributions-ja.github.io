import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import { TWITTER_SHARE } from "../../lib/constants";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import GradientBackground from "@/components/gradient-background";
import ScreenEmojis from "@/components/screen-emojis";
import EmojiShower from "@/components/hero-section-emoji-shower";

import contributors from "../../Contributors.json";
import {
  groupContributorsBySection,
  latestContributorsColor,
} from "@/utils/contributors-grouping";
import Button from "@/components/ui/button";
import SpeechBubbleItem from "@/components/ui/speechBubbleItem";
import SpeechBubbleWrapper from "@/components/ui/SpeechBubbleWrapper";
import Image from "next/image";

export default function Home() {
  const contributorsGroups = groupContributorsBySection(contributors, 3);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <EmojiShower />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent"></div>
        <div className="relative z-10 mx-auto flex h-full items-center justify-start lg:max-w-screen-xl">
          <div className=" px-4 lg:px-0">
            <h1 className="text-4xl font-bold leading-snug lg:text-6xl lg:leading-normal">
              オープンソース
              <br className="lg:hidden" />
              プロジェクトに
              <br />
              参加しよう
            </h1>
            <p className="mt-6 lg:mt-6 lg:text-lg lg:leading-loose">
              日本語のチュートリアルでGitHubの使い方を学び、
              <br className="hidden lg:block" />
              共同開発を体験しましょう。思ったより簡単です。
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 lg:mt-12 lg:flex-row">
              <Button>
                <GitHubIcon className="text-2xl" />
                GitHub
              </Button>
              <Button type="outline" href={TWITTER_SHARE}>
                <ShareIcon className="text-2xl" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GradientBackground mainColor={latestContributorsColor}>
        <ScreenEmojis contributors={contributorsGroups[0]} isTopSection />
        <section className="mx-auto max-w-screen-xl px-4">
          <SpeechBubbleWrapper>
            <SpeechBubbleItem>
              <p>Help Wanted</p>
              <h2>このWebサイトを、もっとPOPにしよう</h2>
            </SpeechBubbleItem>
            <Image
              src={`${BASE_PATH}/test.svg`}
              width={640}
              height={361}
              alt="test image"
              className="overflow-hidden rounded-[24px]"
            />
            <SpeechBubbleItem>
              チュートリアルは、実際にJSONファイルに変更を加えるシンプルな作業を行います。
            </SpeechBubbleItem>
            <SpeechBubbleItem>
              それによって、あなたが入力した絵文字がこのサイト上に表示され、今よりもっとにぎやかで楽しい雰囲気をつ作り出します！
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <ScreenEmojis contributors={contributorsGroups[1]} />
        <section className="mx-auto mt-8 max-w-screen-xl px-4">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <p>面白そう🌈 でもなんだか、難しそう...😕</p>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <ScreenEmojis contributors={contributorsGroups[2]} />
        <section className="mx-auto mt-8 max-w-screen-xl px-4">
          <SpeechBubbleWrapper>
            <SpeechBubbleItem>
              <p>Help Wanted</p>
              <h2>このWebサイトを、もっとPOPにしよう</h2>
            </SpeechBubbleItem>
            <Image
              src={`${BASE_PATH}/test.svg`}
              width={640}
              height={361}
              alt="test image"
              className="overflow-hidden rounded-[24px]"
            />
            <SpeechBubbleItem>
              チュートリアルは、実際にJSONファイルに変更を加えるシンプルな作業を行います。
            </SpeechBubbleItem>
            <SpeechBubbleItem>
              それによって、あなたが入力した絵文字がこのサイト上に表示され、今よりもっとにぎやかで楽しい雰囲気をつ作り出します！
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <ScreenEmojis contributors={contributorsGroups[1]} />
        <section className="mx-auto mt-8 max-w-screen-xl px-4">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <p>
                OSSコントリビューションは思ったより簡単なんだ✨
                今すぐ参加します💨
              </p>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <ScreenEmojis contributors={contributorsGroups[2]} />
        <section className="mt-8 bg-red-600 p-6 pb-0 pt-8 md:px-10 md:pt-10">
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
