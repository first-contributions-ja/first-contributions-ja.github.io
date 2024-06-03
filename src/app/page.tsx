import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import { TWITTER_SHARE } from "../../lib/constants";
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
import SectionTitle from "../components/ui/section-title";
import SectionParagraph from "@/components/ui/section-paragraph";

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

        <section className="mx-auto h-screen max-w-screen-lg px-4 py-32 text-center lg:px-20 lg:py-48">
          <div className="relative">
            <SectionTitle label="concept">
              共同作業を実践し、GitHubに慣れる
            </SectionTitle>
            <SectionParagraph className="mt-8">
              GitやGitHubは、一人で学ぶのが難しいツールです。
              <br />
              バージョン管理やメッセージの書き方など、
              <br />
              個人での学習や開発ではその重要性を実感しにくいためです。
              <br />
              <br />
              First Contributions
              JAは、初学者向けに設計されたオープンなプロジェクトです。
              <br />
              チュートリアルに沿って、実際に共同開発を体験しながらGitHubを学べます！
            </SectionParagraph>
          </div>
        </section>

        <ScreenEmojis contributors={contributorsGroups[1]} />
        <section className="mx-auto max-w-screen-xl px-4 lg:px-0">
          <SpeechBubbleWrapper>
            <SpeechBubbleItem>
              <SectionTitle label="help wanted">
                このWebサイトを、 もっとPOPにしよう！
              </SectionTitle>
            </SpeechBubbleItem>
            <Image
              src={`${BASE_PATH}/img-code.png`}
              width={560}
              height={410}
              alt="test image"
              className="overflow-hidden rounded-[24px] lg:mt-4"
            />
            <SpeechBubbleItem>
              <SectionParagraph className="lg:mt-4">
                チュートリアルでは、このリポジトリのJSONファイルに、実際に変更を加えます。
              </SectionParagraph>
            </SpeechBubbleItem>

            <SpeechBubbleItem>
              <SectionParagraph className="lg:mt-4">
                それによって、入力した絵文字がこのサイト上に表示され、にぎやかで楽しい雰囲気を作り出します！
              </SectionParagraph>
            </SpeechBubbleItem>

            <Button className="mt-4 w-full">
              <GitHubIcon className="text-2xl" />
              詳しくみる
            </Button>
          </SpeechBubbleWrapper>
        </section>

        <section className="mx-auto mt-8 max-w-screen-xl px-4 lg:px-0">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <SectionParagraph>
                面白そう🌈 でもなんだか、難しそう...😕
              </SectionParagraph>
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
