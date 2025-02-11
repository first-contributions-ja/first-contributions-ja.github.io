import contributorsReversed from "../utils/contributors-reversed";

// デフォルトの背景色(特に理由はないので変更可)
const DEFAULT_BACKGROUND_COLOR = "#C6BA9F";

// FFF（白）の場合、safariで背景と絵文字が見えなくなるので、デフォルトを適用
const latestContributorsColor =
  contributorsReversed[0].favoriteColor.toLowerCase() === "#ffffff"
    ? DEFAULT_BACKGROUND_COLOR
    : contributorsReversed[0].favoriteColor;

type contributor = typeof contributorsReversed;

const SECTION_SIZE = 10;

const groupContributorsBySection = (
  contributors: contributor,
  numSections: number,
) => {
  const contributorsToDisplay = contributors.slice(
    0,
    SECTION_SIZE * numSections,
  );
  const sectionGroups = [];

  for (let i = 0; i < numSections; i++) {
    const start = i * SECTION_SIZE;
    const end = start + SECTION_SIZE;
    const group = contributorsToDisplay.slice(start, end);
    sectionGroups.push(group);
  }

  return sectionGroups;
};

export { latestContributorsColor, groupContributorsBySection };
