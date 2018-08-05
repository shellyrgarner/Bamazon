DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;
CREATE TABLE products (
    item_id int NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity int NULL,
    PRIMARY KEY(item_id)
);

USE bamazonDB;
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("shirts", "clothing", 4.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("shorts", "clothing", 3.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("pants", "clothing", 8.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("jeans", "clothing", 10.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("scarf", "accessories", 2.50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("hat", "accessories", 3.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("fanny pack", "accessories", 4.50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("belt", "accessories", 3.50, 5);


USE bamazonDB;
select * from products order by department_name asc;

USE bamazonDB;
UPDATE products
set department_name = 'accessories'
where product_name = 'shoes';
