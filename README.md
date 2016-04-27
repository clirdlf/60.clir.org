# 60.clir.org

## Setup

You will need the following to run this:

- A text editor (e.g. [atom](https://atom.io))
- A git client (e.g. [Github Desktop](https://desktop.github.com/) or just `git`)
- A [GitHub account](httsp://github.com)
- [nodejs](https://nodejs.org/en/)

Assuming you have the above software installed, you can script the setup with the following in a bash shell:

```bash
mkdir ~/projects && cd ~/projects
git clone git@github.com:clirdlf/60.clir.org.git
cd 60.clir.org
npm install
```

## Editing

Open the project in your editor of choice. There is a `gulp` task that will run a server in the background and auto-refresh when you save a change to the project.

```
$ cd ~/projects/60.clir.org
$ atom .
$ gulp serve
```

All of the files needed are in the `app` directory, specifically
`index.html`

## Deploying

Commit your changes to the master branch and run the `deploy` task.

`gulp clean && gulp deploy`
