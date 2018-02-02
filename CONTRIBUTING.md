# Contributing

First of all, thank you for your interest in contributing to Scales! I really appreciate your time and interest.

## Where to start
To get familiar with Scales, start with the README. Everything you need to get the whole project running is in there already.

Since Scales is a collection of separate packages it's likely that you will be contributing to an individual part of Scales, which doesn't require setting the whole thing up.

Once you've fork and cloned the repo locally, create a feature branch and start making changes to the package you want to contribute to.

## Anatomy of a Scales package
The 3 important files in a Scales package are the `.scss` file, index.html, and the README.

### .scss
This is the main file for each package and the one that actually gets referenced in a project that uses Scales. Scales uses [Stylelint Lint](https://stylelint.io/) and [Prettier](https://prettier.io/) to maintain consistent code style. When you commit files, they will linted and formatted. I recommend that you install the Stylelint and Prettier plugins for your code editor so you can catch errors before attempting to commit.

Please follow the commenting convention in the files to add usage notes when appropriate.

#### Variables
Scales makes heavy use of variables so that default values can be set by the user. Make sure you put these in the right area near the top of the file and don't forget to set the `!default` flag.

### index.html
This file is used for testing the different patterns in Scales.

Any changes or additions to classes need to be represented in this file.

You also need to update the CSS in this file so the changes you made are visible. I suggest copying the contents of the `.scss` file into [Sassmeister](https://www.sassmeister.com/) and pasting the css output into `index.html`.

### README.md
This is the documentation for the package. Add any documentation here that helps explain your changes.

Be sure to add or update any variables or classes in the appropriate sections.

Also, be sure to add or update the html in the usage section.

## Opening a PR
Once you've made the changes and updated all of the documentation, simply open a pull request against master.

Thanks again for your interest!
