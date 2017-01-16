DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
    ID SERIAL PRIMARY KEY,
    name varchar,
    breed varchar,
    age integer,
    sex varchar
);

INSERT INTO pups (name, breed, age, sex)
    VALUES ('Mocha', 'Chihuahua', 3, 'M');