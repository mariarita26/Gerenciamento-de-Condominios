FROM maven:3.9.1-amazoncorretto-17 as BUILD
WORKDIR /app
copy pom.xml .
copy src/ ./src/
RUN mvn package -DskipTests

FROM openjdk:17-alpine3.14 as APP
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
CMD ["java", "-jar", "app.jar"]