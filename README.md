# 60.clir.org

## Setup

You will need the following to run this:

- A text editor (e.g. [atom](https://atom.io))
- A git client (e.g. [Github Desktop](https://desktop.github.com/) or just `git`)
- A [GitHub account](httsp://github.com)
- (Optional) [nodejs](https://nodejs.org/en/)

Assuming you have the above software installed, you can script the setup with the following in a bash shell:

```bash
mkdir ~/projects && cd ~/projects
git clone git@github.com:clirdlf/60.clir.org.git
cd 60.clir.org
bundle install
```

## Editing

Open the project in your editor of choice. The following will open the
project up in Atom:

```bash

$ cd ~/projects/60.clir.org && atom .
```

You will need to start the web server in order to view any changes:

```base
$ cd ~/projects/60.clir.org && jekyll serve
```

The main file to edit content is the `index.html`. After you have made
edits you would like to see, point your browser at
[http://localhost:4000](http://localhost:4000).

## Deploying

Updates can be deployed by pushing the update to the Github `gh-pages`
branch. This is the default branch of the project and can be deployed
through the Github client with the **sync** button, or in the `git` client:

```bash
$ git commit -am "Meaningful update message"
$ git push origin gh-pages
```
