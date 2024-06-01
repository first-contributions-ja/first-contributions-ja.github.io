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

        <ScreenEmojis contributors={contributorsGroups[1]} />
        <section className="mx-auto max-w-screen-xl px-4 lg:px-0">
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

        <section className="mx-auto mt-8 max-w-screen-xl px-4 lg:px-0">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <p>面白そう🌈 でもなんだか、難しそう...😕</p>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <ScreenEmojis contributors={contributorsGroups[2]} />
        <section className="mx-auto mt-8 max-w-screen-xl px-4 lg:px-0">
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

        <section className="mx-auto mt-8 max-w-screen-xl px-4 lg:px-0">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <p>
                OSSコントリビューションは思ったより簡単なんだ✨
                今すぐ参加します💨
              </p>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
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
