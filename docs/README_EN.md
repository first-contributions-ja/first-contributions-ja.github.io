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

> Start your OSS activities with a tutorial in full Japanese 🚀

This is a Japanese open source project designed to make it easy for beginners to participate. <br>
Follow the tutorial and experience your first contribution!

We'll be happy to help you with your first pull request ✌️

<br>

## Introduction

This project is a Japanese tutorial to learn how to use Git/GitHub in practice and how to collaborate in open source!

### Who is this for?

- Beginners who want to learn how to use Git/GitHub in practice
- People who are interested in open source but don't know how to contribute
- Or those who want to improve their skills while enjoying collaboration through more contributions

### What is the purpose of this project?

- To experience actual collaborative development using GitHub, which is difficult to learn on one's own

- To teach everyone how to contribute to open source projects with confidence

- And to help developers who love the open source culture connect with each other

<br>

<details>
<summary>What is open source anyway❓❓</summary>

[Open source](https://opensource.guide/ja/starting-a-project/#what-is-open-source-and-why-to-do-it) is:

> When a project is open source, it means that anyone is free to use, study, modify, and distribute your project for any purpose.

>
In most cases, open source projects are open to anyone!

**Contributing to open source projects is a great way to improve your skills by collaborating with other developers. **

If you're not interested in open source and wondering if it's worth the effort,<br>
check out: [Why contribute to open source? ](https://opensource.guide/ja/how-to-contribute/#%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B%E7%90%86%E7%94%B1%E3%81%AF)
</details>

<br>

## How to participate

Let's experience contributing to an open source project right away!

### What do I do?

As a participant of this project, add the following information to the Contributors.json file!

```
"name": "Your handle name",
"github": "Your GitHub account URL",
"favoriteColor": "Your favorite color code",
"favoriteEmoji": "Your favorite emoji"
```

The information you enter will be displayed as an emoji icon on the [website](https://first-contributions-ja.github.io). <br>
So, every time a contributor is added, the site becomes livelier!

https://github.com/first-contributions-ja/first-contributions-ja.github.io/assets/70629747/d83d26ae-3a03-4313-b6bc-b12a865f466f

We want to make the First Contributions JA website even more POP than it is now! <br>
Please try it out for yourself :octocat:

- [Get hands-on](#Get hands-on)
- [Setup:](#Setup)
- [Step 1: Fork this repository](#step-1Fork this repository)
- [Step 2: Clone to local machine](#step-2Clone to local machine)
- [Step 3: Create a working branch](#step-3Create a working branch)
- [Step 4: Make changes](#step-4Make changes)
- [Step 5: Commit changes](#step-5Commit changes)
- [Step 6: Push changes](#step-6Push changes)
- [Step 7: Create a pull request (PR)](#step-7Create pull request pr)
- [Step 8: Review and respond to feedback](#step-8Respond to review and feedback)
- [Finish: 🎉](#finish)
- [More steps](#More steps)
- [Other Contributions](#Other Contributions)

## Getting hands-on

> **Become an open source contributor in 8 easy steps** :sunglasses:

- If you need help, ask in [Discussions](https://github.com/first-contributions-ja/first-contributions-ja.github.io/discussions)!
- If you think there's an improvement you could make to this project, report it in [Issues](https://github.com/first-contributions-ja/first-contributions-ja.github.io/issues)!

Every little bit counts 🙌

---

### Setting up:

- If you don't have a GitHub account, [Sign up](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) to create one.
- And if necessary, we recommend that you first complete the [GitHub Hello World tutorial](https://docs.github.com/ja/get-started/quickstart/hello-world) for complete beginners.
- If an access token is not set in place of a password, errors may occur when cloning, etc.
- In that case, please refer to [Setting a GitHub access token](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

---

### Step 1: Fork this repository

- Click the "Fork" button in the upper right corner of the project page on GitHub (this page) to fork this repository.

<p align="center">
<img height=150px src="/docs/images/fork-button.png">
</p>

- Then click the "Create fork" button.

- You can leave the "Repository name", "Description", "Copy the `main` branch only" and other items at their initial settings!

<p align="center">
<img height=400px src="/docs/images/create-fork-button.png">
</p>

> [!TIP]
> This will create a copy of this repository in your GitHub account 👍

---

### Step 2: Clone to your local machine

You can also edit the files on GitHub, but<br>
to experience a more common workflow, copy the forked repository to your local machine.

- Go to the page of your forked repository on GitHub, click the green "Code" button, and copy the HTTPS URL.

- The URL should look something like this:`https://github.com/<your account name>/first-contributions-ja.github.io.git`

<p align="center">
<img height=300px src="/docs/images/code-clone.png">
</p>

- Open a terminal and navigate to the directory where you want to clone the repository.

- For example, to clone to your desktop, you can use the following command:
```
cd desktop
```
- Clone your forked repository to your local machine with the following command:
```
git clone clone URL you copied earlier
```

> [!TIP]
> This copies the repository to your local machine and you can now work on it locally 💻

---

### Step 3: Create a working branch

<p align="center">
<img height=80px src="/docs/images/clone-to-desktop.png">
</p>

- Use the following command to move into the repository directory:
```
cd first-contributions-ja.github.io
```
- Use the following command to install the packages required for this project:
```
npm install
```
<br>
<details>
<summary>Note: What is npm install?</summary>

<br>

**If you have Node.js installed, you can run the `npm install` command to install all the libraries required for this project at once. **

#### What you can do after `npm install`

- **Start a local server and check the display in the browser**
- After executing the `npm run dev` command, you can check by clicking the displayed URL
- **Automatically check and format the code when committing**
- Executed using a library called husky
- It is executed automatically, so there is no need to execute any commands or do any work

<br>

For more information about the `npm install` command, please refer to [here](https://qiita.com/sugurutakahashi12345/items/3cc49926faeaf25d3051)!

#### 🚧Note) If Node.js is not installed on your local machine, the `npm install` command will cause an error.

In that case, there are **two ways** to deal with it.

- **Skip the `npm install` step. **
- You can get a minimal contribution experience without this step, so if it's difficult for you, feel free to skip it.
- I'd like to know how many people have trouble with this step, so it would be very helpful if you could report to the pull request that "`npm install` didn't work."
- **Install Node.js. **
- For installation instructions, please refer to the following sites.
- [Node.js official site](https://nodejs.org/en) / [How to install Node.js (macOS) Progate](https://prog-8.com/docs/nodejs-env) / [How to install Node.js (Windows) Progate](https://prog-8.com/docs/nodejs-env-win)
- If you want to know more about Node.js, please refer to [What is Node.js? Why is everyone using it? Qiita](https://qiita.com/non_cal/items/a8fee0b7ad96e67713eb).
- If you're interested in web/JavaScript development, this is a great time to install it 😎

</details>

<br>

- Next, create a new branch to separate your work from the `main` branch of your project.

- You can use the following command: `git switch -c <branch name>`

- The **branch name** should be something meaningful related to the work you're going to be doing.
So it will look like this:
```
git switch -c add-yourname
```
- **🚧Caution**)
- Don't forget to replace `yourname` with your handle
- Enter the branch name in half-width alphanumeric characters, without hiragana, kanji, or spaces
- ❌: Ogino Chihiro, Ogino Chihiro, Ogino Chihiro
- Example:
```
git switch -c add-oginochihiro
```

> [!TIP]
> Now you're ready to make changes without directly affecting the project's `main` repository 🍵

---

### Step 4: Make changes

- To get started, open the cloned folder in your favorite code editor, such as VSCode.
- Before making any changes, make sure you are working in the branch you created in the previous step!
- You can check which branch you are in with the following command:
```
git status
```
- Now it's time to make some changes to your Contributors.json file.
- **Copy and paste the following code into the "end of the list" section of your Contributors.json file. **
```
,
{
"name": "Your handle",
"github": "Your GitHub account URL",
"favoriteColor": "Your favorite color code",
"favoriteEmoji": "Your favorite emoji"
}
```

<p align="center">
<img height=300px src="/docs/images/copy-and-paste-code.png">
</p>

- Then replace the pasted text with your own text.
- :art: Please refer to the following sites: [Emoji List](https://www.webfx.com/tools/emoji-cheat-sheet/), [Primary Color Dictionary](https://www.colordic.org), [Traditional Japanese Colors](https://nipponcolors.com)
- For example, if you replace everything, it will look like this:
```
<!-- After change -->
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

### Step 5: Commit the changes

- Go to the terminal again and use the following command to commit the changes to your local repository.
- Don't forget to replace `yourname` with your handle name.
```
git add .
git commit -m "Add yourname to contributors"
```

> [!TIP]
> This will record the changes you made to the Contributors.json file 📝

---

### Step 6: Push your changes

- Push your changes to your forked remote repository:
```
git push origin HEAD
```

> [!TIP]
> This will push your previous commit (your local changes) to your remote repository on GitHub 👾

---

### Step 7: Create a pull request (PR)

- Go to the page of the remote repository you forked on GitHub (`https://github.com/youraccount/first-contributions-ja.github.io`).

- Click the "Compare & pull request" button at the top.

<p align="center">
<img height=150px src="/docs/images/compare-pull-request.png">
</p>

- Then, after checking the following, click the "Create pull request" button.

- Just to be sure, make sure that you are going from the `add-yourname` branch of your repository to the `main` branch of first-contributions-js!

- Leave the title as it is and leave the description blank!

<p align="center">
<img height=500px src="/docs/images/create-pull-request.png">
</p>

> [!TIP]
> This will request that the changes you made in your fork be pushed back to the repository you forked from 🎁

---

### Step 8: Review and respond to feedback

Your PR will be reviewed by the project maintainers.

- It is normal for the reviewer to request changes in your PR. If this happens, just make the changes and accept the changes.
- In that case, just go back to the same working branch as before, make the requested changes, and then just [commit your changes](#step-5Commit your changes) and push again.
- The PR will be automatically updated with the new push.

Most reviews happen within 24 hours, but there can be a delay of a few days. Please be patient ☕

---

### Finish:🎉

- Once your pull request is approved, your changes will be merged into the main project.

Good job! <br>
And thank you for your time and effort in contributing to First Contributions JA! !

<br>

## Further steps

> [!IMPORTANT]
> If you found this project useful, please press the ⭐**star** button at the top of the page! <br>
> Also, please **share** this project with your followers and acquaintances to help spread the word!

You've learned how to contribute to an open source project!

- Reflect on what you've done to solidify your knowledge.

- You've just completed the standard workflow (**read the documentation → fork → make changes → pull request**) that you will often encounter as a contributor!

- Because First Contributions JA is an open source project, you can also contribute in other ways than the [Tutorial](#Getting started) above.

- Let us know what you think about this project in the Discussions 🙌
- If you're interested, check out Other Contributions.
- Contribute to other open source projects!
- Check out the beginner topics on GitHub (first-contributions and good-first-issue)!
- If you have a repository you'd like to contribute to, look for issues labeled "good first issue."
- This generally indicates an issue for beginners who are new to a particular project or to open source in general!

<br>

## Other Contributions

If you want to contribute more, check out the contributing guidelines! <br>
Every contribution, be it code additions, bug fixes, or documentation improvements, is welcome 🤝

## License

This project is licensed under the [MIT LICENSE](/LICENSE).

## Acknowledgements

This project is inspired by great open source projects designed for beginners, such as [first-contributions](https://github.com/firstcontributions/first-contributions) and [Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project).

[twttr-share]: https://twitter.com/intent/tweet?text=Start your OSS activities with a tutorial in full Japanese🚀&url=https://github.com/first-contributions-ja/first-contributions-ja.github.io&hashtags=Programming 'Tweet this project'