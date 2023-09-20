# Review Process

In this document it is described how the review process is designed.

## Rules

The branch `demoanwendung` is the main developmant branch. It is not the default branch, as this `main` branch is the landing-page branch for the GitHub repository. Here lies the documentation and readme. The application code is managed in the `demoanwendung` only.

To enable the need for a review, a branch protection rule has been applied. The creenshot below showses its configuration.

![Alt text](/images/r/image.png)

Here we say that the branch with the application code, named `demoanwendung` is only allowed to be merged, and furthermore it is only allowed to do so, when at a minimum of 1 person has rewieved, and approved the merge request.

This way, we even provide the possibility to comment, discuss and potentially change code before the merge is executed.

The branch to which the ruke is applied, is chosen by a pattern.

Force pushes are still allowed, in case of an (security) emergency, where a commit needs to be applied ASAP, even without reviewing it first. This is crucil for an application that is deployed to the evil, evil world-wide-web.