import contributorsReversed from "../utils/contributors-reversed";
const latestContributorsColor = contributorsReversed[0].favoriteColor;
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
