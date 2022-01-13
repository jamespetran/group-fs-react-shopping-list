-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
--create database 'fs-react-shopping'

CREATE TABLE groceries (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "unit" VARCHAR(20),
    "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO groceries ("name", "quantity", "unit")
VALUES ('banannas', 3, 'bundles'), ('eggs', 4, 'dozen')
