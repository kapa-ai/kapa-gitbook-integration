# kapa-gitbook-integration

## Workflow

Follow the first steps in the [official documentation](https://developer.gitbook.com/cli/quickstart) to install the gitbook CLI:

```bash
npm install @gitbook/cli -g
```

You will need to create a developer token in your Gitbook account's [developer settings](https://app.gitbook.com/account/developer) and use it to authenticate:
```bash
gitbook auth
```

Normally, you would then install the libraries and start the Gitbook dev server as covered in the [official documentation](https://developer.gitbook.com/getting-started/development). However, the official workflow doesn't cover our use case (script injection), as it is designed for building plugins that add new functionality to page blocks, etc.

Instead, we need to do the following to develop our integration:
- Install the integration in a Gitbook space (on [app.gitbook.com](https://app.gitbook.com/)).
- Run `gitbook publish` **every time** we make a change to our integration's code (JS code, manifest contents, etc.).
- Make any arbitrary changes to the content of our Gitbook space, e.g. by editing some text and merging the change request. This will trigger a new build of the Gitbook space, which will include our updated integration. Sometimes it will work without any changes to the content just by refreshing the published page, but it's unclear what the exact conditions are.

**Caution**: This means that there is really no dev environment for the integration. You will need to be careful not to break the integration for other users by publishing broken code.
