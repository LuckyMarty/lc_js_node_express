const connection = require("../../js/utils/mysql");

const StoreControllerIndex = (req, res) => {
    connection.query(
        'SELECT * FROM `products`',
        function (err, results, fields) {
            res.render('store/index', {
                results
            });
            console.log(results.length); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
        });
}

module.exports = {
    StoreControllerIndex
}