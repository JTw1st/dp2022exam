CREATE DATABASE exam2022;
CREATE USER student27 with password '114';
GRANT ALL ON DATABASE exam2022 to student27;
CREATE TABLE "entity5" (
  "id" serial PRIMARY KEY,
  "name7" varchar(50),
  "weight" int
);
CREATE TABLE "amount" (
  "id" serial PRIMARY KEY
);