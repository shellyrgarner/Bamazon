# Bamazon
Screencastify Video:
https://drive.google.com/file/d/1q22KJt9xC51k-U3gB4Rxq8kmMaPwZnJl/view

## Challenge #1: Customer View (Minimum Requirement)
>Created a MySQL Database called bamazon.
>Then created a Table inside of that database called products.
>Products table has the following columns:

    *item_id (unique id for each product)
    *product_name (Name of product)
    *department_name
    *price (cost to customer)
    *stock_quantity (how much of the product is available in stores)

>Created a Node application called bamazonCustomer.js. 
>Running this application will first display all of the items available for sale - reflecting the Products table.
>The app prompts users with two messages:

    1. What is the ID of the product you would like to buy?
    2. How many units?

>Once the customer places their order, the app checks if the item is in stock.  If it is in stock the order is fulfilled and the total is given.  The bamazon database is also updated to reflect the updated stock quantity in the products table. 
>If not, the app logs the phrase Insufficient quantity!, and prevents the order from going through (app is restarted).
