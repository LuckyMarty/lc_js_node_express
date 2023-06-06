const mysql = require('mysql');
const database = 'lc_store';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database
});



// CREATE TABLE `lc_store`.`products` (`id` INT NOT NULL AUTO_INCREMENT , `name` TINYTEXT NOT NULL , `description` TEXT NULL , `price` FLOAT NULL , PRIMARY KEY (`id`)) ENGINE = MyISAM;

module.exports = connection;