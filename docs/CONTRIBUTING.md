> ⚠️ 注意：<br>
> このガイドは、オープンソースプロジェクトへの初めての貢献を体験する[チュートリアル](https://github.com/first-contributions-ja/first-contributions-ja.github.io/tree/docs/%238_update_docs?tab=readme-ov-file#参加方法)ではありません。<br>
> チュートリアルを完了し、より多くの貢献をしたい方や、メンテナー向けに書かれたガイドです！

# first-contributions-ja への貢献ガイド

first-contributions-ja への貢献（コントリビューション）を始めるには、下記のガイドを参照してください。

このプロジェクトをより良いものにしていくために、<br>
様々な開発者とコラボレーションしながら、１つでも多くのコミットを積み上げることが楽しみです！ 👋

<br>

## 目次

- [first-contributions-ja について](#first-contributions-ja-について)
- [どんな貢献をすればいいですか？](#どんな貢献をすればいいですか)
- [開発の流れ](#開発の流れ)
- [スタイルガイドライン](#スタイルガイドライン)
  - [Commit Message](#commit-message)
  - [Branch](#branch)
  - [Pull Request](#pull-request)

<br>

## first-contributions-ja について

このプロジェクトは、主に Git/Github の学習を始めたばかりの方や、初めてオープンソースプロジェクトに貢献したい方を対象としています。

なので、ポップな Web サイトと、明確なチュートリアル、そして初心者に対して協力的なコミュニティが必要です。

チュートリアルを、より分かりやすくするアイデアはありますか？<br>
Web サイトには、どのような機能・コンテンツが必要でしょうか？

全てのコントリビューターを、スキルレベルに関係なく、オープンソースに貢献したい 1 人の開発者として歓迎します 🙌

協力的で楽しい環境を維持するために、<br>
まず、会話から始めましょう！

- [Issues](https://github.com/first-contributions-ja/first-contributions-ja.github.io/issues): 機能追加やバグ修正に関する問題（タスク）を扱う場所
- [Discussions](https://github.com/first-contributions-ja/first-contributions-ja.github.io/discussions): チュートリアルのサポート、このプロジェクトに関するメモ、疑問やアイデアの共有などカジュアルな議論を行う場所

<br>

## どんな貢献をすればいいですか？

このプロジェクトに貢献する方法はいくつかあります。

- Issue を開いて、次のような報告をする：
  - コードの修正、ドキュメンテーションの改善、バグ報告
- Issue を開いて、次のような提案をする：
  - 新機能、ドキュメントに対する新しい項目の追加
- 未解決の Issue に着手する

Issue には、用意されたテンプレートを利用できます！

<br>

## 開発の流れ

実際に開発に参加する流れは、以下の通りです！

基本的には、[チュートリアル](https://github.com/first-contributions-ja/first-contributions-ja.github.io/tree/docs/%238_update_docs?tab=readme-ov-file#参加方法)の流れと同じですが、<br>
「作業する Issue を見つける」項目が追加されていることに注意してください 📝

- Step 0: **作業する Issue を見つける**
- Step 1: このリポジトリをフォーク
- Step 2: ローカルマシンへクローン
- Step 3: 作業用ブランチを作成
- Step 4: 変更を加える
- Step 5: 変更をコミット
- Step 6: 変更をプッシュ
- Step 7: プルリクエスト（PR）を作成
- Step 8: レビューとフィードバックに対応
- Finish: 🎉

### Step 0: 作業する Issue を見つける

チュートリアルでは、以下のタスクを行いました：

> このプロジェクトの参加者として、Contributors.json ファイルに必要な情報を入力し、プロフィールカードを作成

**同じように、まず初めに取り組むべき Issue を見つけます。**

その際、次のことに注意してください：

- `Assignees`が設定されている場合、そのタスクは既に他の開発者に割り当てられています。
- もし、`Assignees`に誰も割り当てられていない場合は、Issue 内にコメントをして、割り当てられてからタスクに着手してください。
- これによって、特定の Issue に取り組んでいる人が明確になり、複数人が同じ作業を行なってしまうことを防げます。

<br>

## スタイルガイドライン

基本的には、以下のスタイルガイドラインに合わせてください！<br>
そこまで厳格ではないですよ 🎨

### Commit Message

命名規則は、次のとおりです：

- 基本: `絵文字 prefix: 内容 #issue番号`
- 例: `📚 docs: README.md 日本語訳追加 #12`
- prefix に対応した絵文字
  - `✨ feat`: 新機能追加関連
  - `📚 docs`: ドキュメントの追加・修正・削除
  - `🐛 fix`: 機能やバグに関する修正
  - `🎨 style`: スタイル関連
  - `🔧 chore`: 雑事、カテゴライズする必要のないもの
  - その他は必要に応じて適宜追加

手順はこちら：

- `git add .`
- `git commit -m "📚 docs: README.md 日本語訳追加 #12"`

### Branch

ブランチ名は、あなたがこれから行う作業に関連した意味のある名前を付けます。

命名規則は、次のとおりです：

- `prefix/#issue番号_簡潔な作業内容`
- 例: `docs/#01_create_documents`
- `prefix`に関しては、コミットメッセージの`prefix`を参考

手順はこちら：

- `git branch docs/#17_test`
- `git branch`でブランチが作成されたか確認する
- `git checkout docs/#17_test`として branch に移動
- `git status`で branch に移動したことを確認

### Pull Request

- **作成ルール**
  - 基本的に Issue に対してブランチを作成し、プルリクエストを行う
- **作成手順**
  - プルリクエスト作成画面の URL 末尾に、以下の URL を追加することで、テンプレートを利用できます
    ```markdown
    ?quick_pull=1&template=pr.md
    ```
  - プルリク画面 URL
    - `https://github.com/first-contributions-ja/first-contributions-ja.github.io/compare/main...branchname`
  - テンプレートを追加した URL
    - `https://github.com/first-contributions-ja/first-contributions-ja.github.io/compare/main...branchname?quick_pull=1&template=pr.md`

### 最新の main ブランチを取得、反映

- `git checkout main` で main ブランチに移動
- `git status`で状況を把握
- `git pull origin main`
- ref: [リモートリポジトリから変更を取得する - GitHub Docs](https://docs.github.com/ja/get-started/using-git/getting-changes-from-a-remote-repository)
