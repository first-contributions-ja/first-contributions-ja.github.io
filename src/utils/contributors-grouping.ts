import contributorsReversed from "../utils/contributors-reversed";

// デフォルトの背景色(特に理由はないので変更可)
const DEFAULT_BACKGROUND_COLOR = "#C6BA9F";

// FFF（白）の場合、safariで背景と絵文字が見えなくなるので、デフォルトを適用
const latestContributorsColor =
  contributorsReversed[0].favoriteColor.toLowerCase() === "#ffffff" ||
  contributorsReversed[0].favoriteColor.toLowerCase() === "#fff"
    ? DEFAULT_BACKGROUND_COLOR
    : contributorsReversed[0].favoriteColor;

type contributor = typeof contributorsReversed;

// 1セクションあたりの人数。src/utils/animated-emoji.tsx の getAnimationStyles() が
// calc(100vw / 10 * index) で配置するため、これを超えると絵文字が画面外に出る。
const SECTION_SIZE = 10;

// 区分の数は貢献者数から求める。ページ側が固定値(4)を渡していたため、41人目以降の
// 絵文字が描画されないままだった（#279）。1セクション10人が配置の都合による上限なので、
// 人数が増えたときはセクションを増やすことで対応する。
const groupContributorsBySection = (contributors: contributor) => {
  const numSections = Math.max(
    1,
    Math.ceil(contributors.length / SECTION_SIZE),
  );
  const sectionGroups = [];

  for (let i = 0; i < numSections; i++) {
    const start = i * SECTION_SIZE;
    const end = start + SECTION_SIZE;
    sectionGroups.push(contributors.slice(start, end));
  }

  return sectionGroups;
};

export { latestContributorsColor, groupContributorsBySection };
