# kapa-gitbook-integration

Gitbook is a documentation platform designed for creating, managing, and publishing modern documentation sites. It enables teams to write structured content in Markdown, collaborate in real-time, and publish easily to the web. The doc content is stored on the Gitbook platform directly, or can be synced with a Github repo.

Since some of our customers use Gitbook for their docs, we offer an integration that allows them to deploy kapa there. To do this, we need to build a "Gitbook Integration" script that they install on their Gitbook docs from the Gitbook website. They offer something like an Integration "App Store".

## Setup

Make a Gitbook account if you haven't already, using your Kapa email.

Follow the first steps in the [official documentation](https://developer.gitbook.com/cli/quickstart) to install the gitbook CLI:

```bash
npm install @gitbook/cli -g
```

You will need to create a developer token in your Gitbook account's [developer settings](https://app.gitbook.com/account/developer). After making it and copying it, use run:

```bash
gitbook auth
```

and then paste it in when prompted. You are now authenticated to Gitbook.

## Workflow

After completing setup, for a typical Gitbook integration you would install the libraries and start the Gitbook dev server as covered in the [official documentation](https://developer.gitbook.com/getting-started/development). However, the official workflow doesn't cover our use case (script injection), as it is designed for building plugins that add new functionality to page blocks, etc.

Instead, here is the flow for developing our integration:

- Optionally, install the integration in a Gitbook space (on [app.gitbook.com](https://app.gitbook.com/)). We already have available kapa ones ([ex](https://kapa-ai.gitbook.io/test-space/)).
- `cd` into the `kapa-gitbook-integration` directory (where the `gitbook-manifest.yaml` is located)
- Run `npm install`
- Make your changes, publish a PR.
- Get the PR approved, merge.

**CAUTION**: Because our product is a Gitbook script, there is unfortunately no way to do local development and test your changes before releasing. You will need to be careful not to break the integration for other users by publishing broken code.

### Releasing

After the PR is merged:

- Ping addison@gitbook.io to grant us publishing permissions. Because this is a script that gets injected, it has restricted capabilities and needs to be reviewed by the Gitbook team. We typically get granted publishing permissions for a few days (once approved).
- Pull latest `main`.
- Run `gitbook publish`.

We should publish our changes **every time** we make a change to our integration's code (JS code, manifest contents, etc.).

### Testing / Verifying

Make any arbitrary changes to the content of our Gitbook space, e.g. by editing some text and merging the change request. This will trigger a new build of the Gitbook space, which will pull our updated integration. Note: sometimes Gitbook will use the updated integration without any changes to the content just by refreshing the published page, but it's unclear what the exact trigger conditions are.

## Important reminders

**NOTE**: To obtain access rights for releasing the integration, send an email to [addison@gitbook.io](mailto:addison@gitbook.io) and request access after merging your changes to `main`.

**Caution**: This means that there is really no dev environment for the integration. You will need to be careful not to break the integration for other users by publishing broken code.
