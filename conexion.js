const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'login',
});

module.exports = connection;