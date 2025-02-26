import { describe, expect, it } from "vitest";
import contributors from "../Contributors.json";

// 定数と検証パターンを分離
const GITHUB_URL_PATTERN =
  /^(https?:\/\/)?(www\.)?github\.com\/[^\s/$.?#].[^\s]*$/;
const HEX_COLOR_PATTERN = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

describe("Contributors", () => {
  // 各プロパティごとに別々のテストケースを作成
  describe("コントリビューターのプロパティ", () => {
    // テスト前に必要なデータ検証
    it("コントリビューターが少なくとも1人存在すること", () => {
      expect(contributors).toBeInstanceOf(Array);
      expect(contributors.length).toBeGreaterThan(0);
    });

    it("名前プロパティが有効であること", () => {
      contributors.forEach((contributor, index) => {
        expect(contributor.name, `Contributor at index ${index}`).toBeDefined();
        expect(contributor.name, `Contributor at index ${index}`).toBeTypeOf(
          "string",
        );
        expect(
          contributor.name.length,
          `Contributor at index ${index}`,
        ).toBeGreaterThan(0);
      });
    });

    it("GitHubのURLが有効であること", () => {
      contributors.forEach((contributor, index) => {
        expect(
          contributor.github,
          `Contributor at index ${index}`,
        ).toBeDefined();
        expect(contributor.github, `Contributor at index ${index}`).toBeTypeOf(
          "string",
        );
        expect(contributor.github, `Contributor ${contributor.name}`).toMatch(
          GITHUB_URL_PATTERN,
        );
      });
    });

    it("お気に入りの色がHEX形式であること", () => {
      contributors.forEach((contributor, index) => {
        expect(
          contributor.favoriteColor,
          `Contributor ${contributor.name}`,
        ).toBeDefined();
        expect(
          contributor.favoriteColor,
          `Contributor ${contributor.name}`,
        ).toBeTypeOf("string");
        expect(
          contributor.favoriteColor,
          `Contributor ${contributor.name}`,
        ).toMatch(HEX_COLOR_PATTERN);
      });
    });

    it("お気に入りの絵文字が有効であること", () => {
      contributors.forEach((contributor, index) => {
        expect(
          contributor.favoriteEmoji,
          `Contributor ${contributor.name}`,
        ).toBeDefined();
        expect(
          contributor.favoriteEmoji,
          `Contributor ${contributor.name}`,
        ).toBeTypeOf("string");
        expect(
          contributor.favoriteEmoji.length,
          `Contributor ${contributor.name}`,
        ).toBeGreaterThan(0);
      });
    });
  });

  // オプション: すべてのコントリビューターに必要なプロパティがあるかをチェック
  describe("コントリビューターのスキーマ", () => {
    it("すべての必須プロパティを持っていること", () => {
      const requiredProperties = [
        "name",
        "github",
        "favoriteColor",
        "favoriteEmoji",
      ];

      contributors.forEach((contributor, index) => {
        requiredProperties.forEach((prop) => {
          expect(contributor, `Contributor at index ${index}`).toHaveProperty(
            prop,
          );
        });
      });
    });
  });
});
