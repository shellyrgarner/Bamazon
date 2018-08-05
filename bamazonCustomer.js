var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;

    startApp();
});

function startApp() {
    connection.query(
        "SELECT * FROM products", function(err, res) {
            // console.log(answer);
            if (err) throw err;
            for(var i=0; i<res.length;i++)
            {
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
    .then(function(answer) {
        var chosenID;
        for (var i=0; i<res.length;i++) {
            console.log(answer);
            if (res[i].item_id == answer.item_id) {
                chosenID = res[i];

                // console.log(chosenID);
                // console.log(answer.item);
                // console.log("resid: " + res[i]);
            }
            // console.log("resid: " + res[i]);
            // console.log("chosenid: " + chosenID);
            // console.log("answer_item: " + answer.item_id);
        }
        // console.log("resid: " + res[i]);
        // console.log("chosenid: " + chosenID);
        // console.log("answer_item: " + answer.item_id);

        // if(chosenID)
        // console.log(res);
    });
}
)}