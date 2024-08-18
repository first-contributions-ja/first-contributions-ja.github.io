<p align="center">
  <img src="/docs/images/img-readme-header.png">
</p>
<p align="left">
  <img src="https://github.com/first-contributions-ja/first-contributions-ja.github.io/actions/workflows/nextjs.yml/badge.svg" alt="Deploy Next.js site to Pages">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat" alt="Static Badge">
  <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source Love">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License MIT">
  <img src="https://img.shields.io/badge/contributions-welcome-blue.svg?style=flat" alt="Contributions Welcome">
  <img src="https://img.shields.io/badge/first_contributions-%F0%9F%94%B0-white?style=flat" alt="Static Badge">
</p>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twttr-share]

> 完全日本語のチュートリアルで、OSS 活動を始める 🚀

初心者でも簡単に参加できるように設計された、日本語のオープンソースプロジェクトです。<br>
チュートリアルに沿って、初めての貢献（コントリビュート）を体験してください！

あなたの最初のプルリクエストを、喜んでお手伝いします ✌️

<br>

## はじめに

このプロジェクトは、Git/GitHub の実践的な使い方や、オープンソースでコラボレーションする作法を学ぶための、日本語のチュートリアルです！

### これは誰のためのものですか？

- Git/GitHub の、実践的な使い方を学びたい初心者
- オープンソースに興味があるが、どのように貢献すればよいかわからない人々
- もしくは、より多くの貢献を通して、コラボレーションを楽しみながら、スキルを高めたい方

### このプロジェクトの目的は？

- 1 人では学習しづらい、GitHub を使った実際の共同開発を体験すること
- 誰もが自信を持って、オープンソースプロジェクトに貢献する方法を学ぶこと
- そして、オープンソースカルチャーが好きな開発者同士が、繋がる手助けをすること

<br>

<details>
  <summary>そもそもオープンソースとは❓❓</summary>
  
  [オープンソース](https://opensource.guide/ja/starting-a-project/#オープンソースとはなにでありなぜそれを行うのか)とは：

  > あるプロジェクトがオープンソースである時、それは誰でも自由に使って、学び、修正して、あなたのプロジェクトをいかなる目的であっても配布できるということを意味します。
  > 
  ほとんどの場合、オープンソースのプロジェクトは、誰でも自由に開発に参加できます！
  
  **オープンソースのプロジェクトに対して貢献（コントリビュート）することは、<br>
  他の開発者との共同開発を通して、自身のスキルを高める素晴らしい方法です。**
  
  もしあなたがオープンソースに無関心で、労力を割く必要があるかどうか疑問に思っているなら、<br>
  こちらを参照してみて下さい：[オープンソースにコントリビュートする理由は？](https://opensource.guide/ja/how-to-contribute/#%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B%E7%90%86%E7%94%B1%E3%81%AF)
</details> 

<br>

## 参加方法

さっそくオープンソースプロジェクトへの貢献を、体験してみましょう！

### 何をすればいいの？

このプロジェクトの参加者として、Contributors.json ファイルに下記の情報を追記します！

```
"name": "あなたのハンドルネーム",
"github": "あなたのGitHubアカウントのURL",
"favoriteColor": "あなたの好きなカラーコード",
"favoriteEmoji": "あなたの好きな絵文字"
```

入力された情報は、絵文字のアイコンとして、[Webサイト](https://first-contributions-ja.github.io)上に表示されます。<br>
なので、コントリビューターが増えるたびに、サイト上が賑やかになります！

https://github.com/first-contributions-ja/first-contributions-ja.github.io/assets/70629747/d83d26ae-3a03-4313-b6bc-b12a865f466f

私たちは、First Contributions JA の Web サイトを、今よりもっとPOPにしたいです！<br>
ぜひ、実際に手を動かしてみてください :octocat:

- [実際に手を動かす](#実際に手を動かす)
  - [セットアップ:](#セットアップ)
  - [Step 1: このリポジトリをフォーク](#step-1このリポジトリをフォーク)
  - [Step 2: ローカルマシンへクローン](#step-2ローカルマシンへクローン)
  - [Step 3: 作業用ブランチを作成](#step-3作業用ブランチを作成)
  - [Step 4: 変更を加える](#step-4変更を加える)
  - [Step 5: 変更をコミット](#step-5変更をコミット)
  - [Step 6: 変更をプッシュ](#step-6変更をプッシュ)
  - [Step 7: プルリクエスト（PR）を作成](#step-7プルリクエストprを作成)
  - [Step 8: レビューとフィードバックに対応](#step-8レビューとフィードバックに対応)
  - [Finish: 🎉](#finish)
- [さらなるステップ](#さらなるステップ)
- [その他の貢献](#その他の貢献)

## 実際に手を動かす

> **8 つの簡単なステップで、オープンソースのコントリビューターになる** :sunglasses:

- もし助けが必要な場合、[Discussions](https://github.com/first-contributions-ja/first-contributions-ja.github.io/discussions)で質問してください！
- このプロジェクトに関する改善点を見つけた場合は、[Issues](https://github.com/first-contributions-ja/first-contributions-ja.github.io/issues)から報告してください！

どんな些細なことでも、大歓迎です 🙌

---

### セットアップ：

- もし GitHub のアカウントを持っていない場合は、[Sign up](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)からアカウントを作成してください。
  - そして、必要に応じて全くの初心者向けの[GitHub Hello World のチュートリアル](https://docs.github.com/ja/get-started/quickstart/hello-world)を先に行うことをお勧めします。
- パスワードの代わりとなるアクセストークンが設定されていない場合、クローンなどのタイミングでエラーが生じることがあります。
  - その場合は[GitHub アクセストークンの設定](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)を参照してください。

---

### Step 1:このリポジトリをフォーク

- GitHub 上のプロジェクトページ（このページ）の右上にある "Fork" ボタンをクリックして、このリポジトリをフォークします。

<p align="center">
  <img height=150px src="/docs/images/fork-button.png">
</p>

- そして、"Create fork"ボタンをクリックします。
  - 「Repository name」「Description」「Copy the `main` branch only」などの項目は、すべて初期のままでOKです！

<p align="center">
  <img height=400px src="/docs/images/create-fork-button.png">
</p>

> [!TIP]
> これにより、あなたの GitHub アカウントに、このリポジトリのコピーが作成されます 👍

---

### Step 2:ローカルマシンへクローン

GitHub 上でファイルを編集することも可能ですが、<br>
より一般的なワークフローを体験するため、フォークしたリポジトリをあなたのローカルマシンにコピーします。

- GitHub 上の、フォークしたリポジトリのページに移動し、緑色の "Code" ボタンをクリックし、HTTPS の URL をコピーします。
  - URL は、次のようになっているはずです：`https://github.com/<あなたのアカウント名>/first-contributions-ja.github.io.git`

<p align="center">
  <img height=300px src="/docs/images/code-clone.png">
</p>

- ターミナルを開き、リポジトリをクローンするディレクトリに移動します。
  - 例えば、クローン先をデスクトップに指定する場合、以下のコマンドを使用できます。
  ```
  cd desktop
  ```
- 以下のコマンドを使用して、フォークしたリポジトリをローカルマシンにクローンします：
  ```
  git clone 先ほどコピーしたクローンURL
  ```

> [!TIP]
> これにより、リポジトリがあなたのローカルマシンにコピーされ、ローカル環境で作業することが可能になりました 💻

---

### Step 3:作業用ブランチを作成

<p align="center">
  <img height=80px src="/docs/images/clone-to-desktop.png">
</p>

- 次のコマンドで、リポジトリのディレクトリ内に移動します：
  ```
  cd first-contributions-ja.github.io
  ```
- 次のコマンドで、このプロジェクトに必要なパッケージを、インストールします：
  ```
  npm install
  ```
<details>
  <summary>メモ: npm install とは❓❓</summary>

  `npm install`コマンドを実行することで、<br>
  このプロジェクトに必要なライブラリ（package.json ファイルに記述されている内容）を、一括でインストールできます！

  具体的に、`npm install`によって、：
  - `npm run dev`コマンドで、ローカルサーバーを起動し、開発中にブラウザでの表示を確認（プレビュー）することができます！
  - このプロジェクトで使用されている、**husky**というライブラリによって、コミット時に自動でコードの整形・チェックが行われます！

  `npm install`コマンドについて、より詳しい内容は、[こちら](https://qiita.com/sugurutakahashi12345/items/3cc49926faeaf25d3051)を参照してみて下さい！
    
  - 🚧**注意**)もし、あなたのローカルマシンに、Node.js がインストールされていない場合、`npm install`コマンドで、エラーが発生します。
  - その場合は、2通りの対処法があります：
    1. 実のところ、`npm install`のステップは、飛ばしても問題ないです！その場合は、プルリクエストの際に、プロジェクトのメンテナーに伝えてください！「エラーが発生した」「`npm install`のステップを飛ばした」など。
    2. Node.js をインストールする。
      - Node.jsは、JavaScriptの実行環境として利用できます。インストールすることで、ブラウザ以外で、JavaScript を実行できるようになります。
      - なので、もし Web/JavaScript 開発に興味があるのであれば、この機会にインストールすることを、おすすめします😎
      - その際、お使いのOSによって、Node.js のインストール方法が微妙に異なることに、注意してください！

</details> 

<br>

- 次に、プロジェクトの`main`ブランチからあなたの作業を切り離すために、新しいブランチを作成してください。
  - 次のコマンドを使用できます：`git switch -c <ブランチ名>`
  - **ブランチ名**は、あなたがこれから行う作業に関連した意味のある名前を付けます。
    なので、次のようになります：
  ```
  git switch -c add-yourname
  ```
  - **🚧注意**）
   - `yourname`をあなたのハンドルネームに置き換えることを忘れないでください
   - ブランチ名には、ひらがな、漢字、空白は使わず、半角英数字で入力してください
     - ❌: おぎのちひろ、荻野ちひろ、Ogino Chihiro
   - 例：
  ```
  git switch -c add-oginochihiro 
  ```

> [!TIP]
> これにより、プロジェクトの`main`リポジトリに直接影響を与えることなく、変更を加える準備が整いました 🍵

---

### Step 4:変更を加える

- 作業を開始するため、VSCode などのお好きなコードエディタで、クローンしたフォルダを開きます。
  - 変更を加える前に、前のステップで作成したブランチで作業することを確認してください！
  - 次のコマンドで、現在のブランチを確認できます：
  ```
  git status
  ```
- それでは Contributors.json ファイルに変更を加えます。
  - **Contributors.json ファイルの「リストの末尾」に、以下のコードをコピーして貼り付けます。**
  ```
  ,
  {
    "name": "あなたのハンドルネーム",
    "github": "あなたのGitHubアカウントのURL",
    "favoriteColor": "あなたの好きなカラーコード",
    "favoriteEmoji": "あなたの好きな絵文字"
  }
  ```

<p align="center">
  <img height=300px src="/docs/images/copy-and-paste-code.png">
</p>

- そして、貼り付けたテキストの中身を、あなた独自の内容に置き換えます。
  - :art: 次のサイトを参考にしてみてください：[絵文字一覧](https://www.webfx.com/tools/emoji-cheat-sheet/)、[原色大辞典](https://www.colordic.org)、[日本の伝統色](https://nipponcolors.com)
  - 例えば、全て置き換えたら以下のようになります：
  ```
  <!-- 変更後 -->
    ~~
    },
    {
      "name": "oginochihiro",
      "github": "https://github.com/first-contributions-ja",
      "favoriteColor": "#ffffff",
      "favoriteEmoji": "🐉"
    }
  ]
  ```

---

### Step 5:変更をコミット

- 再びターミナルに移動し、以下のコマンドを使用して、変更をローカルリポジトリにコミットします。
  - `yourname`をあなたのハンドルネームに置き換えることを忘れないでください。
  ```
  git add .
  git commit -m "yournameをコントリビューターに追加"
  ```

> [!TIP]
> これにより、あなたが Contributors.json ファイルに加えた変更が、記録されます 📝

---

### Step 6:変更をプッシュ

- フォークしたリモートリポジトリに変更をプッシュします：
  ```
  git push origin HEAD
  ```

> [!TIP]
> これにより、先ほどのコミット（ローカルでの変更内容）を、GitHub上のあなたのリモートリポジトリに反映させます 👾

---

### Step 7:プルリクエスト（PR）を作成

- GitHub 上の、フォークしたリモートリポジトリのページ（`https://github.com/あなたのアカウント/first-contributions-ja.github.io`）に移動します。
- 上部に表示されている"Compare & pull request" ボタンをクリックします。

<p align="center">
  <img height=150px src="/docs/images/compare-pull-request.png">
</p>

- そして、以下のことを確認したら、"Create pull request" ボタンをクリックします。
  - 念のため、あなたのリポジトリの`add-yourname`ブランチから、first-contributions-jsの`main`ブランチに向かっていることを確認してください！
  -  タイトルは初期入力のままで、description は空欄でOKです！

<p align="center">
  <img height=500px src="/docs/images/create-pull-request.png">
</p>

> [!TIP]
> これにより、あなたがフォークして行った変更を、フォーク元のリポジトリに反映させるようにリクエストします 🎁

---

### Step 8:レビューとフィードバックに対応

プロジェクトのメンテナーによって、あなたの PR がレビュー（確認）されます。

- レビュアーが PR に対して変更を求めるのはごく普通のことです。もしそれが起こっても、よくある事だと考えて修正を加えてください。
  - その場合、先ほどと同じ作業用ブランチに戻り、要求された修正を行ったら、同じように[変更をコミット](#step-5変更をコミット)してプッシュするだけです。
  - PR は新しいプッシュによって、自動的に更新されます。

ほとんどの場合は 24 時間以内にレビューしますが、数日の遅れが発生することもあります。気長にお待ちください ☕

---

### Finish:🎉

- プルリクエストが承認されると、あなたが加えた変更はメインプロジェクトにマージされます。

お疲れ様です！<br>
そして First Contributions JA に、時間と労力を割いて貢献していただきありがとうございます！！

<br>

## さらなるステップ

> [!IMPORTANT]
> もしこのプロジェクトが役に立つと思った場合は、ページの上部から ⭐**star ボタン**を押してください！<br>
> また、このプロジェクトを広めるために、**フォロワーや知り合いに共有**してください！

あなたは、オープンソースのプロジェクトに貢献する方法を学びました！

- 行った作業を振り返って、知識を定着させてください。
  - あなたはコントリビューターとしてよく体験する、標準的なワークフロー（**ドキュメントを読む → フォーク → 変更を加える → プルリクエスト**）を完了したところです！
- First Contributions JA は、オープンソースで運営・開発されているプロジェクトなので、上記の[チュートリアル](#実際に手を動かす)とは**別の形で貢献**することもできます。
  - [Discussions](https://github.com/first-contributions-ja/first-contributions-ja.github.io/discussions)にて、このプロジェクトに関する感想を聞かせてください 🙌
  - もし興味があれば、[その他の貢献](#その他の貢献)を確認してください。
- 他のオープンソースプロジェクトにも、貢献してみてください！
  - GitHub 上の初心者向けのトピック([first-contributions](https://github.com/topics/first-contributions)や[good-first-issue](https://github.com/topics/good-first-issue)）をチェックしてみてください！
  - 貢献したいリポジトリがあれば、「**good first issue**」というラベルのついたイシューを探してください。
  - これは一般的に、特定のプロジェクトやオープンソース自体に慣れていない初心者向けのイシューであることを表します！

<br>

## その他の貢献

より多くの貢献がしたい方は、[貢献ガイドライン](./docs/CONTRIBUTING.md)を参照してください！<br>
コードの追加やバグの修正、ドキュメントの改善など、どんな些細な貢献も大歓迎です 🤝

## ライセンス

このプロジェクトは、[MIT LICENSE](/LICENSE)の下でライセンスされています。

## 謝辞

このプロジェクトは、[first-contributions](https://github.com/firstcontributions/first-contributions)や[Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project)などの、<br>
初心者向けに設計された素晴らしいオープンソースプロジェクトから影響を受けています。

[twttr-share]: https://twitter.com/intent/tweet?text=完全日本語のチュートリアルで、OSS活動を始める🚀&url=https://github.com/first-contributions-ja/first-contributions-ja.github.io&hashtags=プログラミング 'Tweet this project'
