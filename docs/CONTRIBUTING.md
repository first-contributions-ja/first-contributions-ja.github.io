# コントリビューションガイド

## GitHub機能の役割

- Discussions: 疑問やアイデアなど、このプロジェクトの開発に関する議論を扱う
- Issues: 機能追加やバグ修正に関する問題を扱う
- Discord（メンバー用）: そもそものGithubの使い方・OSSの作法などを中心に、あとで見返さなくてもいいようなカジュアルな内容を扱う


## 基本的な開発方法

1. 作業するIssueに自分をアサインする（「これやります」といった宣言）
1. リポジトリをクローンする
1. 作業用ブランチを作成
1. 変更を加える
1. 変更をコミット
1. 変更をプッシュ
1. mainブランチへのプルリクエスト（PR）を作成
1. レビューとフィードバックに対応
1. mainブランチにマージされる


### 1. 作業するIssueに自分をアサインする

- Issue個別ページ右側にある`Assignees`でアサインする

### 2. リポジトリをクローンする

- [こちら](https://github.com/first-contributions-ja/first-contributions-ja)を開く
- 緑色のCodeボタンをクリックし、GitHub CLIのタブを選択
- ターミナルで実行

### 3. 作業用ブランチを作成

- `git branch docs/#17_test`
- `git branch`でブランチが作成されたか確認する
- `git checkout docs/#17_test`としてbranchに移動
- `git status`でbranchに移動したことを確認

### 4. 変更を加える

必要なファイルに変更を加えます

### 5. 変更をコミット

- `git add .`
- `git commit -m "docs: テストを追加 #17"`

### 6. 変更をプッシュ

- `git push origin <branch名>` もしくは `git push origin head` でプッシュ

### 7. mainブランチへのプルリクエスト（PR）を作成
- プルリクエストの作成
  - リポジトリのCodeページ上部の黄色く表示された部分から
  - リポジトリのCodeページ > ブランチ > 該当ブランチ > Contribute > Open pull requestから
- テンプレートに沿ってtitle、descriptionをうめる
- Create pull requestボタンでプルリクを作成する

### 8. レビューとフィードバックに対応

- 誰かをレビュワーにアサインする
- 誰かがレビューをする
- 修正があれば対応する

### 9. mainブランチにマージされる

- レビューした人が Marge pull requestをして、mainブランチにマージされる

### 10. 最新のmainブランチを取得、反映

- `git checkout main` でmainブランチに移動
- `git status`で状況を把握
- `git pull origin main`
- ref: [リモートリポジトリから変更を取得する - GitHub Docs](https://docs.github.com/ja/get-started/using-git/getting-changes-from-a-remote-repository)

## Discussions

- **作成ルール**
  - 同様の議論がないか確認
  - なければ新しくDiscussionを作成
- **カテゴリー**
  - `General`: カテゴリー不明、未分類の内容
  - `Ideas`: 新機能を提案する
  - `Polls`: 多数決や投票をする
  - `Q&A`: 技術面について不明なことを相談する
- **テンプレート**
  - 基本的になし
  - `Q&A` はなるべく具体的に困っている内容、試したこと、どうなって欲しいのかを記述する（できればで可）
- **DiscussionsのIssue化**
  - 新機能追加が確定したり、バグについての話題が上がった場合は、Discussionsの内容をもとにIssueを立て、タスク化する
  - issue化したらcloseする


## Issues

- **作成ルール**
  - 基本的にDiscussionやDiscordで決まった新機能や、バグについてのみIssueを立てる
- **作成手順**
  - テンプレートに沿って内容を作成
    - [テンプレート](https://github.com/first-contributions-ja/first-contributions-ja.github.io/blob/main/.github/ISSUE_TEMPLATE/%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88.md?plain=1)
    - ~~[バグ修正用テンプレート]()~~ 必要があれば後日作成する
- **Closeについて**
  - Issueに伴うブランチがマージされたらcloseすること（Pull Requestのコメントでcloseする）


## Pull Request
- **作成ルール**
  - 基本的にIssueに対してブランチを作成し、プルリクエストを行う
- **作成手順**
  - プルリクエスト作成画面のURL末尾に以下を追加する
    ```markdown
    ?quick_pull=1&template=pr.md
    ```
  - プルリク画面URL
    - `https://github.com/first-contributions-ja/first-contributions-ja.github.io/compare/main...branchname`
  - テンプレートを追加したURL
    - `https://github.com/first-contributions-ja/first-contributions-ja.github.io/compare/main...branchname?quick_pull=1&template=pr.md`


## Branch

- 命名規則
  - 基本: `prefix/#issue番号_タイトル`
  - 例: `docs/#01_create_documents`
- prefix
  - コミットメッセージのprefixを参考

## コミットメッセージ

- 命名規則
  - 基本: `絵文字 prefix: 内容 #issue番号`
  - 例: `📚 docs: README.md 日本語訳追加 #12`
- 絵文字/prefix
  - `✨ feat`: 新機能追加関連
  - `📚 docs`: ドキュメントの追加・修正・削除
  - `🐛 fix`: 機能やバグに関する修正
  - `🎨 style`: スタイル関連
  - その他は必要に応じて適宜追加
