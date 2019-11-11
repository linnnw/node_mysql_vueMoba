var mysql = require('mysql');

let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'	//数据库名
};

module.exports = mysql.createPool(config);
