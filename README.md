Quick Assist library is a collection of Bootstrap styled React components. It aims boost web APP development speed.

## Available Scripts

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn stoybook`

Lanuches the storybook locally for development

#### `yarn build-storybook`

Creates static storybook files

**NOTE:** Static storybook files are requried to push to _ryanzhanagau.github.io_, each time run build story command

## Publish Packages

```
  $ cd packages/<packageName>
  $ npm publish --access public
```

**NOTE:** Make sure the package.json version is bumped up for code update.
Package name should be start with `@anctech` to make sure the package goes into _Anctech_ org.

## How to Use

`yarn add bootstrap` to install bootstrap package

`yarn add @anctech/<packageName>` to install paticular package

Then follow the component API
