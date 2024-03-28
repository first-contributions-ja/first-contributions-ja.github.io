import Image from "next/image";
import { basePath } from "../../next.config";
const BASE_PATH = basePath ? basePath : "";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SITE_NAME } from "../../lib/constants";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ForkRightIcon from "@mui/icons-material/ForkRight";

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
      <section className="bg-red-600 p-16">
        <div className="rounded-lg bg-white p-16 ">
          <p className="text-center text-sm font-bold">＼ TRY THIS NOW ／</p>
          <h2 className="mt-2 justify-center gap-2 text-center text-2xl font-bold text-red-600">
            <span>8 STEP で学ぶ OSS コントリビューション </span>
            <span className="text-3xl">🫶</span>
          </h2>
          {/* <ol className="mx-auto mt-8 w-fit list-inside list-decimal leading-loose"> */}
          <div className="mx-auto mt-12 flex w-fit justify-center gap-12 rounded-md  bg-zinc-50 p-8">
            <ol className=" w-fit font-bold leading-loose">
              <li>
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">🎁</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold ">STEP 1</span>
                    リポジトリをフォーク
                  </p>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">⬇️</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 2</span>
                    ローカルマシンへクローン
                  </p>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">🌳</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 3</span>
                    作業用ブランチを作成
                  </p>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">🔥</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 4</span>
                    変更を加える
                  </p>
                </div>
              </li>
            </ol>
            <ol className=" w-fit font-bold leading-loose">
              <li>
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">🚧</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 5</span>
                    変更をコミット
                  </p>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">🎈</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 6</span>
                    変更をプッシュ
                  </p>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">💌</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 7</span>
                    プルリクエスト（PR）を作成
                  </p>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex items-center gap-4">
                  <div className=" flex aspect-square w-[56px] items-center justify-center rounded bg-white text-2xl shadow-lg">
                    <span className="drop-shadow-lg">📝</span>
                  </div>
                  <p className="flex-1">
                    <span className="block text-[12px] font-bold">STEP 8</span>
                    レビューとフィードバックに対応
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <p className="mt-4 text-center text-red-600">
            <KeyboardDoubleArrowDownIcon className="text-4xl" />
          </p>
          <p className="mt-4 text-center text-lg font-bold">
            マージされて...Finish 🥳
            <br />
            あなたの変更がメインプロジェクトに反映されます 🎉
          </p>
          <a
            href="https://github.com/first-contributions-ja/first-contributions-ja.github.io"
            className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-white transition hover:opacity-70"
          >
            <GitHubIcon fontSize="medium" className="" />
            <span>詳しい手順はこちら</span>
          </a>
        </div>
      </section>
    </>
  );
}
