FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /workspace/app

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Install dos2unix to fix line endings in case mvnw was saved with CRLF in Windows
RUN apk add --no-cache dos2unix
RUN dos2unix mvnw
RUN chmod +x ./mvnw

# Build all dependencies to be cached
RUN ./mvnw dependency:go-offline

# Copy the project source
COPY src src

# Package the application
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM eclipse-temurin:21-jre-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/target/dependency

WORKDIR /app
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

# Ensure directories for persistence exist
RUN mkdir -p /app/data
RUN mkdir -p /app/uploads

ENTRYPOINT ["java","-cp",".:lib/*","com.yaalma.api.ApiApplication"]
