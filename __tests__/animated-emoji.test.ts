import { describe, expect, it } from "vitest";
import { emojiToUnicodeHex } from "../src/utils/animated-emoji";

describe("emojiToUnicodeHex", () => {
  it("does not force color presentation for monochrome fonts", () => {
    expect(emojiToUnicodeHex("🎉")).toBe("&#x1F389;");
    expect(emojiToUnicodeHex("❤️")).toBe("&#x2764;");
  });

  it.each([
    ["👩🏽‍💻", "&#x1F469;&#x1F3FD;&#x200D;&#x1F4BB;"],
    ["🇯🇵", "&#x1F1EF;&#x1F1F5;"],
    ["🏳️‍🌈", "&#x1F3F3;&#x200D;&#x1F308;"],
    ["1️⃣", "&#x31;&#x20E3;"],
  ])("preserves the full sequence for %s", (emoji, expected) => {
    expect(emojiToUnicodeHex(emoji)).toBe(expected);
  });

  it("rejects empty input", () => {
    expect(() => emojiToUnicodeHex("")).toThrow("Invalid emoji input");
  });
});
