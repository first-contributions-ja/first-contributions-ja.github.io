import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import { TWITTER_SHARE } from "../../lib/constants";
import GradientBackground from "@/components/gradient-background";
import ScreenEmojis from "@/components/screen-emojis";
import EmojiShower from "@/components/hero-section-emoji-shower";
import contributorsReversed from "../utils/contributors-reversed";
import {
  groupContributorsBySection,
  latestContributorsColor,
} from "@/utils/contributors-grouping";
import Button from "@/components/ui/button";
import SpeechBubbleItem from "@/components/ui/speechBubbleItem";
import SpeechBubbleWrapper from "@/components/ui/SpeechBubbleWrapper";
import Image from "next/image";
import SectionTitle from "../components/ui/section-title";

export default function Home() {
  const contributorsGroups = groupContributorsBySection(
    contributorsReversed,
    3,
  );

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <EmojiShower />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent"></div>
        <div className="relative mx-auto flex h-full items-center justify-start lg:max-w-screen-xl">
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

        <section className="mx-auto flex h-screen max-w-screen-lg items-center justify-center px-4 text-center">
          <div className="relative">
            <SectionTitle label="concept">
              <div className="lg:mt-4 lg:text-5xl">
                共同作業を実践し、GitHubに慣れる
              </div>
            </SectionTitle>
            <p className="mt-8">
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
            </p>
          </div>
        </section>

        <ScreenEmojis contributors={contributorsGroups[1]} />
        <section className="mx-auto max-w-screen-lg px-4 lg:px-0">
          <SpeechBubbleWrapper>
            <SpeechBubbleItem>
              <SectionTitle label="help wanted">
                このWebサイトを、もっとPOPにしよう！
              </SectionTitle>
            </SpeechBubbleItem>
            <Image
              src={`${BASE_PATH}/img-code.png`}
              width={560 * 0.8}
              height={410 * 0.8}
              alt="test image"
              className="overflow-hidden rounded-[24px] lg:mx-auto lg:mt-8"
            />

            <SpeechBubbleItem>
              <p className="lg:mt-8">
                チュートリアルでは、このリポジトリのJSONファイルに、実際に変更を加えます。
              </p>
            </SpeechBubbleItem>

            <SpeechBubbleItem>
              <p className="lg:mt-2">
                それによって、入力した絵文字がこのサイト上に表示され、にぎやかで楽しい雰囲気を作り出します！
              </p>
            </SpeechBubbleItem>

            <SpeechBubbleItem>
              <Button className="w-full lg:mx-auto lg:mt-8 lg:w-80">
                <GitHubIcon className="text-2xl" />
                リポジトリを確認
              </Button>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <section className="mx-auto mt-8 max-w-screen-lg px-4 lg:px-0">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <p className="text-lg">面白そう🌈 でもなんだか、難しそう...😕</p>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <ScreenEmojis contributors={contributorsGroups[2]} />
        <section className="mx-auto mt-8 max-w-screen-lg px-4 lg:px-0">
          <SpeechBubbleWrapper>
            <SpeechBubbleItem>
              <SectionTitle label="good first issue">
                初めてのOSSコントリビューションを体験しよう
              </SectionTitle>
            </SpeechBubbleItem>
            <SpeechBubbleItem>
              <p className="lg:mt-8">
                First Contributions JAに貢献（コントリビュート）することは、
                <br />
                他の様々なOSSに参加する流れを知ることにも繋がります。
              </p>
            </SpeechBubbleItem>
            <SpeechBubbleItem>
              <div className="m-auto rounded-lg bg-gray-100 p-4 text-left font-bold lg:mt-8 lg:flex lg:w-fit lg:justify-center lg:gap-12 lg:p-12">
                <div>
                  <h4 className="text-red-600">STEP1</h4>
                  <p>プロジェクトをフォーク</p>
                  <h4 className="mt-2 text-red-600">STEP2</h4>
                  <p>ローカルマシーンへクローン</p>
                  <h4 className="mt-2 text-red-600">STEP3</h4>
                  <p>作業用ブランチを作成</p>
                  <h4 className="mt-2 text-red-600">STEP4</h4>
                  <p>変更を加える</p>
                </div>
                <div>
                  <h4 className="mt-2 text-red-600 lg:mt-0">STEP5</h4>
                  <p>変更をコミット</p>
                  <h4 className="mt-2 text-red-600">STEP6</h4>
                  <p>変更をプッシュ</p>
                  <h4 className="mt-2 text-red-600">STEP7</h4>
                  <p>プルリクエストを作成</p>
                  <h4 className="mt-2 text-red-600">STEP8</h4>
                  <p>レビューとフィードバックに対応</p>
                </div>
              </div>
            </SpeechBubbleItem>
            <SpeechBubbleItem>
              <Button
                className="w-full lg:mx-auto lg:mt-8 lg:w-80"
                href="https://github.com/first-contributions-ja/first-contributions-ja.github.io?tab=readme-ov-file#%E5%8F%82%E5%8A%A0%E6%96%B9%E6%B3%95"
              >
                <GitHubIcon className="text-2xl" />
                詳細な手順をREADMEで確認
              </Button>
            </SpeechBubbleItem>
          </SpeechBubbleWrapper>
        </section>

        <section className="mx-auto mt-8 max-w-screen-lg px-4 lg:px-0">
          <SpeechBubbleWrapper type="right">
            <SpeechBubbleItem type="right">
              <p className="text-lg">
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
