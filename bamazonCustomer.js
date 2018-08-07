var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});

connection.connect(function (err) {
    if (err) throw err;

    startApp();
});

function startApp() {
    connection.query(
        "SELECT * FROM products", function (err, res) {
            // console.log(answer);
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            }

            inquirer
                .prompt([
                    {
                        name: "itemID",
                        type: "input",
                        message: "What is the ID of the product you would like to buy?"
                    },
                    {
                        name: "units",
                        type: "input",
                        message: "How many units?"
                    }
                ])
                .then(function (answer) {
                    var chosenID;
                    var quantityRemaining = 0;

                    for (var i = 0; i < res.length; i++) {
                     
                        if (res[i].item_id == answer.itemID && res[i].stock_quantity > 0) {
                            chosenID = res[i].item_id;
                            quantityRemaining += res[i].stock_quantity;

                            console.log("It's your lucky day! We have " + res[i].stock_quantity + " in stock.  Enjoy your purchase.")
                            quantityRemaining -= answer.units;

                            connection.query(
                                "UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        stock_quantity: quantityRemaining
                                    },
                                    {
                                        item_id: answer.itemID
                                    }
                                ],
                                function (error) {
                                    if (error) throw err;
                                    // console.log("Stock updated successfully!");
                                    //  console.log("------------------------------------------");

                                    // restart();
                                }
                            );
                            console.log("Stock updated successfully!");
                            console.log("Quantity remaining for " + res[i].product_name + ": " + quantityRemaining);
                            
                                     console.log("------------------------------------------");

                                    restart();
                        }
                        else if (res[i].item_id == answer.itemID && res[i].stock_quantity == 0) {
                            console.log("Insufficient quantity!");
                            console.log("Please choose another item!");
                            console.log("------------------------------------------");

                            restart();
                        }
                    }
                });
        }
    )
};

// function updateInventory(answer) {
//     connection.query(
//         "SELECT * FROM products", function (err, res) {
//             // console.log(answer);
//             if (err) throw err;
//             var chosenID;
//             var quantityRemaining = 0;

//             for (var i = 0; i < res.length; i++) {

//                 if (res[i].item_id == answer.itemID && res[i].stock_quantity > 0) {
//                     chosenID = res[i].item_id;
//                     quantityRemaining += res[i].stock_quantity;

//                     console.log("It's your lucky day! We have " + res[i].stock_quantity + " in stock.  Enjoy your purchase.")
//                     quantityRemaining -= answer.units;

//                     connection.query(
//                         "UPDATE products SET ? WHERE ?",
//                         [
//                             {
//                                 stock_quantity: quantityRemaining
//                             },
//                             {
//                                 item_id: answer.itemID
//                             }
//                         ],
//                         function (error) {
//                             if (error) throw err;
//                             console.log("Stock for " + res[i].product_name + " updated successfully!");
//                         }
//                     );
//                     // console.log("Quantity remaining for " + res[i].product_name + ": " + quantityRemaining);
//                 }
//                 else if (res[i].item_id == answer.itemID && res[i].stock_quantity == 0) {
//                     console.log("Insufficient quantity!");
//                     console.log("Please choose another item!");
//                     startApp();
//                 }

//             }
//         }
//     )
// };


function restart() {


    startApp();

}