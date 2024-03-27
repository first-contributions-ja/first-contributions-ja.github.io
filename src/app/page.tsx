import Image from "next/image";
import { basePath } from "../../next.config";
export const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SITE_NAME } from "../../lib/constants";
import Filter1RoundedIcon from "@mui/icons-material/Filter1Rounded";
import Filter2RoundedIcon from "@mui/icons-material/Filter2Rounded";
import Filter3RoundedIcon from "@mui/icons-material/Filter3Rounded";
import Filter4RoundedIcon from "@mui/icons-material/Filter4Rounded";
import Filter5RoundedIcon from "@mui/icons-material/Filter5Rounded";
import Filter6RoundedIcon from "@mui/icons-material/Filter6Rounded";
import Filter7RoundedIcon from "@mui/icons-material/Filter7Rounded";
import Filter8RoundedIcon from "@mui/icons-material/Filter8Rounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function Home() {
  return (
    <>
      <section className=" mx-auto max-w-2xl px-6 lg:flex lg:h-screen lg:max-w-7xl lg:items-center lg:justify-center lg:gap-10">
        <div className="mt-[80px] lg:mt-[100px] lg:flex-1">
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

      <section className=" pb-2 md:bg-red-600 md:p-10 md:pb-0">
        <div className="rounded-xl bg-stone-100 px-5 pb-10 md:p-20 md:pt-8">
          <h2 className="rounded-sm bg-red-600 p-4 text-center text-xl font-bold tracking-tighter text-white md:bg-transparent md:pt-10 md:text-3xl md:text-red-600">
            簡単７ステップでコントリビューション！
          </h2>
          <div className="mx-auto max-w-2xl max-w-md md:flex md:max-w-4xl md:items-center md:justify-center md:gap-10">
            <ul className="mb-6 mt-8 list-inside px-2 font-bold leading-[2.8rem] md:mb-8 md:mt-10 md:text-xl md:leading-loose">
              <li>
                <Filter1RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                プロジェクトをフォークする
              </li>
              <li>
                <Filter2RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                ローカルリポジトリにクローンする
              </li>
              <li>
                <Filter3RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                ブランチを作成する
              </li>
              <li>
                <Filter4RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                ソースコードを変更！
              </li>
              <li>
                <Filter5RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                コミットする
              </li>
              <li>
                <Filter6RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                コミット内容をプッシュする
              </li>
              <li>
                <Filter7RoundedIcon
                  fontSize="medium"
                  className="mr-3 text-red-600"
                />
                プルリクエストを作成する
              </li>
            </ul>
            {/* // octocatの代わりにならなそうなアイコン */}
            {/* <div className="hidden lg:inline-block ">
              <BuildRoundedIcon className="text-[120px] mb-4 text-red-600" />
              <AutoAwesomeRoundedIcon className="text-[120px] mb-4 text-yellow-300" />
            </div> */}
            <div className="hidden lg:inline-block lg:flex-[0.4]">
              <img
                src={`${BASE_PATH}/octocat.png`}
                alt="octocat"
                className="scale-x-[-1] transform"
                // width="200"
              />
            </div>
          </div>
          <div className="mb-8 text-center font-bold leading-7 md:mb-16 md:text-xl md:leading-loose">
            <KeyboardDoubleArrowDownRoundedIcon className="mb-4 text-6xl text-red-600 md:mb-8" />
            <p>マージされると……</p>
            <p>あなたの変更がメインプロジェクトに反映されます 🎉</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
              className="rounded-xl bg-red-600 px-5 py-4 text-white transition hover:opacity-70 md:text-lg"
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
