<!--
Copyright © TUM AET 2025 - 2025

Licensed under the MIT License

Authors: Benedikt Hofmann, Patrick Stoeckle, and other contributors

SPDX-FileCopyrightText: 2025 TUM AET

SPDX-License-Identifier: MIT
-->

# devops-demo

## Server

This project consists of a very simple Spring Boot Hello-World application. The project itself is located in the `demo` folder. It only exposes the endpoint `/greet` on port `8080` with an optional query parameter called `name`, i.e.,

```bash
$ curl localhost:8080/greet?name=TUM
# --> Hello, TUM
```

## Client

The project also has a very minimalistic Angular Hello-World application. The project itself is located in the `ui` folder. It only exposes the endpoint `/` on port `9090`.

Both apps are containerized and can also be run as a compose application. What is more interesting about the project is everything else

## CI/CD

We use reusable workflows for this project. Each workflow starts at a `base` CI file, i.e., [`ci.yml`](./.github/workflows/ci.yml), which references the rest. It is important to note that **both** the parent and the child workflow can define permissions. Using permissions in the child and parent workflow, we want to demonstrate that the child workflow can set less/fewer permissions than the parent, and proceed with them.

Here is an exhaustive list of all workflows you can find in the `.github/workflows` folder:

- `java`: this workflow uses a `gradle` action to check the java code and run tests. The `nebula.lint` plugin is used to lint the `build.gradle` file itself. The `jacoco` plugin generates test reports that are later included in the PR. The `com.github.spotbugs` plugin checks for common programming bugs in the java code.
- `build-container`: this demonstrates the flexibility of reusable workflows. It encompasses other actions, which run in a bundle. It takes care of everything from building a docker image, to analyzing the result. More specifically, this workflow entails:
  - [`hadolint`](https://github.com/hadolint/hadolint): This workflow uses the `hadolint` action to lint the `Dockerfile`. It is a good practice to lint your Dockerfiles, as it can help catch common mistakes and improve the overall quality of your images.
  - `docker`: A common workflow to build the container image, and push it to the GitHub Container Registry (`ghcr`). We need the container image in the container registry to demonstrate other tools that scan the image itself.
  - [`dockle`](https://github.com/goodwithtech/dockle): This workflow uses the `dockle` action to scan the container image for security vulnerabilities.
  - [`trivy`](https://trivy.dev/latest/): This workflow uses the `trivy` action to find vulnerabilities in the container image and generate a Software Bill of Materials (SBOM). The SBOM is then signed via `cosign` with a key generated via `GITHUB_TOKEN="<your-token>" cosign generate-key-pair github://kristi-balla/devops-demo`.
- [`tflint`](https://github.com/terraform-linters/tflint): This workflow uses the `tflint` action to lint the Terraform code.
- [`kics`](https://kics.io/index.html#): This workflow uses the `kics` action to scan the codebase for security vulnerabilities.
- [`kube-linter`](https://docs.kubelinter.io/#/): The tool is still in an early stage of development, but it works for our basic use-case. In addition, some alerts might overlap with other linters.
- [`semgrep`](https://github.com/semgrep/semgrep): Yet another static-analysis tool. Creating an account with the service opens the door to ✨ _AI-enhanced_ ✨ feedback, but the free OSS version can catch some early errors as well.
-`spelling`: No project looks professional without proper spelling! Here, we use the [`cspell`](https://cspell.org/) and [`typos`](https://github.com/crate-ci/typos) actions.
- [**renovatebot**](https://docs.renovatebot.com/): GitHub `dependabot` is not the only tool out there to update third-party dependencies. `renovate` can be added as a separate action, or as a GitHub Application, but you need to create a free account.

## Open Points

- [ ] Damnation memoriae: remove kristi and jan at the end (think of combinations between firstname, surname, firstname-surname, as well as uppercase and lowercase permutations) 
- [ ] Rewrite history
