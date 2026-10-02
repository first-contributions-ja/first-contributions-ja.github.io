import { describe, expect, it } from "vitest";
import contributorsReversed from "../src/utils/contributors-reversed";
import { groupContributorsBySection } from "../src/utils/contributors-grouping";

// getAnimationStyles() places the nth emoji of a section at
// calc(100vw / 10 * n) / calc(80vh / 10 * n), so a section may never hold more
// than ten contributors: an eleventh would be positioned off-screen. The count
// is pinned here rather than imported so that changing it fails this test
// instead of silently pushing emoji off the screen.
const SECTION_SIZE = 10;

describe("groupContributorsBySection", () => {
  const groups = groupContributorsBySection(contributorsReversed);
  const shown = groups.flat();

  it("keeps every contributor", () => {
    expect(shown).toHaveLength(contributorsReversed.length);
  });

  it("keeps contributors past the fortieth", () => {
    // The bug: numSections was hard-coded to 4, so everyone from the 41st
    // onwards never reached the page.
    expect(contributorsReversed.length).toBeGreaterThan(SECTION_SIZE * 4);
    expect(shown.length).toBeGreaterThan(SECTION_SIZE * 4);
  });

  it("places each contributor exactly once and in order", () => {
    expect(shown).toEqual(contributorsReversed);
  });

  it("never puts more than ten contributors in a section", () => {
    for (const group of groups) {
      expect(group.length).toBeLessThanOrEqual(SECTION_SIZE);
    }
  });

  it("fills every section but the last", () => {
    groups.slice(0, -1).forEach((group) => {
      expect(group).toHaveLength(SECTION_SIZE);
    });
  });

  it("makes a section for every contributor", () => {
    expect(groups).toHaveLength(
      Math.ceil(contributorsReversed.length / SECTION_SIZE),
    );
  });

  it("returns one empty section rather than none for no contributors", () => {
    // ScreenEmojis maps over the array it is given, so a caller must always
    // receive something to render.
    expect(groupContributorsBySection([])).toEqual([[]]);
  });
});
