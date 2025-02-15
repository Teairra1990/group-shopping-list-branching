-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

DROP TABLE IF EXISTS items;

REATE TABLE IF NOT EXISTS mylist (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255),
    "quantity" INTEGER,
    "unit" VARCHAR(255),
    "purchased" BOOLEAN 
);

INSERT INTO mylist ("name", "quantity", "unit", "purchased") 
Values 
('Apples', 10, 'kg' , true),
('Bananas', 3, 'bunch', false),
('Carrots', 6, 'kg', false),
('Tomatoes', 2, 'kg', false);