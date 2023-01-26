# actions-publish-test

<a href="https://www.npmjs.com/package/actions-publish-test" alt="NPM Package">
    <img src="https://img.shields.io/npm/v/actions-publish-test" />
</a>

This is a repo to test how to publish an NPM package with an optional tag when
a GitHub release is created.

It uses the package.json version:

| package.json version | npm version | npm tag | npm install cmd          |
| -------------------- | ----------- | ------- | ------------------------ |
| `"1.0.0"`            | 1.0.0       | latest  | `npm i name`             |
| `"2.0.0-beta"`       | 2.0.0-beta  | beta    | `npm i name@2.0.0-beta`  |
| `"2.0.0-beta1"`      | 2.0.0-beta1 | beta    | `npm i name@2.0.0-beta1` |

It should work with any tag, like `alpha`, `beta`, `rc`.

## Resources

https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages
https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable
