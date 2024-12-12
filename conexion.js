const connection = mysql.createPool({
    host: process.env.HOSTDB || 'localhost',
    user: process.env.USERDB || 'root',
    database: process.env.DB || 'login',
    password: process.env.PASSWORDDB || '',
    port: process.env.PORTDB || 3306,
});

module.exports = connection;

//mysql://root:hDvhZxYfebVyejzJqhFrcbbVjastvcBu@junction.proxy.rlwy.net:37124/railway