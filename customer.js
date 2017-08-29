var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

   password: 'random1',
   database: 'bamazon'
});
connection.connect(function(err) {
if (err) throw err;
console.log(“connected as id ” + connection.threadId);
afterConnection();
});

function afterConnection() {
    connection.query(“SELECT * FROM products”, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
        console.log(“Price: ” + res[i].price);
        console.log(“Product ID: ” + res[i].item_id);
        console.log(“Product: ” + res[i].product_name);
        console.log(“Department: ” + res[i].department_name);

        }
            inquirer.prompt([

               {
                    type: “input”,
                    name: “product”,
                    message: “What is the ID of the product you would like to buy?”
                },
                {
                    type: “input”,
                    name: “quantity”,
                    message: “How many units of the product would you like to buy?”
                }
            ])
            .then(function(answer) {
                var query = “SELECT * FROM products WHERE item_id= ?“;
                connection.query(query, [answer.product], function(err, res) {
                if (err) throw err;
                var price = res[0].price;
                var userQuantity = answer.quantity;
                var quantity = res[0].stock_quantity;
                if (quantity >= [userQuantity]) {
                console.log(“Your item is in stock. Order total is $” + Math.floor(price * userQuantity) + “.”);
                var query = connection.query(
                          “UPDATE products SET ? WHERE ?“, [{ stock_quantity: (quantity - userQuantity) }, { item_id: answer.product }],
                          function(err, res) {

                           }
                        );
                        var query2 = connection.query(
                            “UPDATE products SET ? WHERE ?“, [{ product_sales: Math.floor(price * userQuantity) }, { item_id: answer.product }],
                            function(err, res) {

                           }
                        );
                        connection.end();

                   } else {
                      console.log(“Out of stock“);
                      connection.end();
                    }
               });
           })
   });
}
