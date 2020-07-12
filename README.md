# react-probe-web-cse510

A probe in implementing a React-based website, to inform and eventually become a web-react-base.

## Components

- Git LFS: For versioning of binary files.

  - <https://git-lfs.github.com/>
  - <https://rehansaeed.com/gitattributes-best-practices/>

- Luxon: For DateTime formatting and management.

  - <https://moment.github.io/luxon/>

- JSS: For styling components, as used in Material-UI.

  - <https://cssinjs.org/>
  - <https://material-ui.com/styles/basics/>
  - <https://material-ui.com/guides/typescript/>

- Material-UI: For Material Design components.

  - <https://material-ui.com/>
  - <https://material.io/>

- MDX: For authoring in Markdown.

  - <https://mdxjs.com/>

- MobX: For managing application state updates (i.e., as a store).
  
  - <https://mobx.js.org/>  
  - <https://mobx.js.org/getting-started.html> 

- React: For rendering the interface.

  - <https://reactjs.org/>

- react-snap: For pre-rendering application to be served as static files.

  - <https://github.com/stereobooster/react-snap>

- TypeScript: For compile-time type checking.

  - <https://www.typescriptlang.org/>
  
- Yarn: For package management and script invocation.

  - <https://yarnpkg.com/>

## Installation and Execution

- Requires Node is installed:

  <https://nodejs.org/> 

- Requires Yarn is globally installed:

  <https://yarnpkg.com/>

  ```shell script
  npm install --global yarn
  ```

- Requires project code has been cloned to your computer (see [Using Git and Github](#using-git-and-github)).

- Install packages:

  ```shell script
  yarn install
  ```

- Build and serve, available at `http://localhost:3000`:

  ```shell script
  yarn start
  ```

  As you edit and save files, many changes will automatically update in the browser. 
  A browser refresh is sometimes necessary when changes do not trigger automatic updates.
  Browser refresh is currently only supported at the root.

## Using Git and GitHub

Several of the [GitHub Guides](https://guides.github.com/) are useful for getting started:

- <https://guides.github.com/introduction/flow/>
- <https://guides.github.com/activities/hello-world/>
- <https://guides.github.com/introduction/git-handbook/>
- <https://guides.github.com/activities/forking/>

We also find it easiest to use GitHub Desktop:

<https://desktop.github.com/>

To work with this project, you will need to fork this repository and then clone it to your computer.
You should not commit edits to `master`, but will instead create a branch and commit your edits to that branch. 
You will then publish your branch to your fork and submit a pull request to merge it into this repository.
Afterwards or along the way, your fork and clone may fall behind the commits on this repository's current `master`
(i.e., because other people are merging their contributions onto this repository's `master`).
You may therefore need to pull those commits into your `master` and maybe rebase your branch onto the updated `master`.
This is a standard social coding workflow, described to help you search for more information if needed.

Additional resources when you make a mistake or become stuck include:

- <https://github.com/k88hudson/git-flight-rules>
- <http://firstaidgit.io/>
