# Copyright © Siemens 2025 - 2025
#
# Licensed under the Siemens Inner Source License 1.5
#
# Authors: Kristi Balla, Patrick Stöckle, renovate[bot]
#
# SPDX-FileCopyrightText: 2025 Siemens
#
# SPDX-License-Identifier: LicenseRef-Siemens-ISL-1.5

# kics-scan disable=fd54f200-402c-4333-a5a4-36ef6709af2f
# disables alarms about the missing user instruction
FROM gradle:8.14.2-jdk21 AS build

LABEL org.opencontainers.image.source=https://github.com/kristi-balla/devops-demo
LABEL org.opencontainers.image.description="A sample backend based on Spring Boot."
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /app

COPY build.gradle settings.gradle ./
COPY gradle ./gradle
RUN gradle dependencies --no-daemon

COPY src ./src
RUN gradle build --no-daemon -x test

FROM gcr.io/distroless/java21-debian12:debug-nonroot@sha256:c23123156441cff6195c85cd28fce8f3395ba927536c928a54cfc380130229a4
WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
