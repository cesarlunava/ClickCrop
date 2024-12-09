const express = require('express')
const app = express()
const port = 3000
//Get the client
const mysql = require('mysql2/promise');
const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bycrypt');
const login = require('./log-in');
const saltRounds = 10;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(session({
    secret: 'ashuby23tv4h32v4uwd78vus87sd8dfhjkig98'
}))

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'login',
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/log-in', login)
    
