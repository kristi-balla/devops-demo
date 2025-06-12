# devops-demo

⚠️⚠️ **TODO**: do not forget to check the codebase for occurrences of my own name when done!

## Server

This project consists of a very simple spring-boot hello application. The project is in the `demo` folder. It only exposes the endpoint `/greet` on port 8080 with an optional query parameter called `name`:

```bash
$ curl localhost:8080/greet?name=TUM
# --> Hello, TUM
```

The app is containerized and can also be run as a compose application. What is more interesting about the project is everything else

## CI/CD

Reusable Workflows are used for this project. Each starts at a "base" ci file, which references the rest. It is important to note that both the parent workflow as well as the child define permissions. This is to demonstrate the fact that the child can also set less permissions than provided and proceed with them.

Here is an exhaustive list of all workflows found here:

- **Docker**: A common workflow to build and push the image to the ghcr. This is needed for some other tools that scan the image itself.
- [**Dockle**](https://github.com/goodwithtech/dockle)
- [**Hadolint**](https://github.com/hadolint/hadolint)
- **Java**: this workflow uses a `gradle` action to check the java code and run tests. The `nebula.lint` plugin is used to lint the `build.gradle` file itself. The `jacoco` plugin generates test reports that are later included in the PR. The `com.github.spotbugs` plugin checks for common programming bugs in the java code.
- [**KICS**](https://kics.io/index.html#)
- [**kube-lint**](https://docs.kubelinter.io/#/): The tool is still in an early stage of development, but it works for our basic use-case. In addition, some alerts might overlap with other linters.
- [**renovatebot**](https://docs.renovatebot.com/): there are other things out there compared to dependabot! This can be added as a separate action, or as a GitHub Application, but you will need to create a free account.
- [**semgrep**](https://github.com/semgrep/semgrep): yet another static-analysis tool. Creating an account with the service opens the door to ✨ AI-enhanced  ✨ feedback, but the free oss version can catch some early errors as well.
- **spelling**: because no project looks professional without proper spelling! Here, we use the [cspell](https://cspell.org/) and [typos](https://github.com/crate-ci/typos) actions.
- [**tflint**](https://github.com/terraform-linters/tflint)

## Open Points

- [ ] trivy
- [ ] adding an SBOM to the image and analyzing that
- [ ] `npm audit` --> needs a *very basic* frontend
- [ ] judge the sanity of all this
