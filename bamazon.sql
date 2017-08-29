CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
        item_id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(20),
        department_name VARCHAR(20),
        price DECIMAL (10,2) NULL,
        stock_quantity INT NOT NULL,
        PRIMARY KEY(item_id)
);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Intercooler piping”, “Car Parts”, 59.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Salsa”, “Foods”, 5.99, 600);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Pandulce”, “Foods”,.79, 1000);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Motor Oil 3w-30”, “Car Parts”, 89.99, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Digemon cards”, “Toys”, 4.99, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Iphone charger”, “Electronics”,14.50, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Milk”, “Foods”, 2.50, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Perfume”, “Swag”, 9.00, 1000);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Body Wash”, “Bath”, 14.99, 80);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(“Xbox One”, “Electronics”, 420.00, 150);

SELECT * FROM products;
