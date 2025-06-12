# kics-scan disable=fd54f200-402c-4333-a5a4-36ef6709af2f
# disables alarms about the missing user instruction
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

FROM gcr.io/distroless/java21-debian12:debug@sha256:a8b28650b068a2386776008444cdb5825a2d0b00f070ec5811d7340523985448     
WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]