import contributors from "../../Contributors.json";

const latestContributorsColor = contributors[0].favoriteColor;

type contributor = typeof contributors;

const SECTION_SIZE = 10;

const groupContributorsBySection = (
  contributors: contributor,
  numSections: number,
) => {
  const contributorsToDisplay = contributors.slice(
    0,
    SECTION_SIZE * numSections,
  );
  const sctionGroups = [];

  for (let i = 0; i < numSections; i++) {
    const start = i * SECTION_SIZE;
    const end = start + SECTION_SIZE;
    const group = contributorsToDisplay.slice(start, end);
    sctionGroups.push(group);
  }

  return sctionGroups;
};

export { latestContributorsColor, groupContributorsBySection };
