FROM gradle:8.14.1-jdk21 AS build

LABEL org.opencontainers.image.source=https://github.siemens.cloud/CCS/devops-demo
LABEL org.opencontainers.image.description="A sample Docker image of a Spring Boot application using Gradle."
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /app

COPY build.gradle settings.gradle ./
COPY gradle ./gradle
RUN gradle dependencies --no-daemon

COPY src ./src
RUN gradle build --no-daemon -x test

FROM gcr.io/distroless/java21-debian12@sha256:7c9a9a362eadadb308d29b9c7fec2b39e5d5aa21d58837176a2cca50bdd06609
WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]