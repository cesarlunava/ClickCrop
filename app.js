const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//Get the client
const mysql = require('mysql2/promise');
const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bycrypt');
const login = require('./log-in');
const registro = require('./registro');
const { obtenerUsuarios, eliminarUsuarios } = require('./usuarios');
const validar = require('./validar');
const saltRounds = 10;

app.use(cors({
    origin: process.env.URLFRONTEND || 'http://localhost:5173',
    credentials: true
}))
app.use(session({
    secret: process.env.SECRETSESSION || 'ashuby23tv4h32v4uwd78vus87sd8dfhjkig98',
    proxy: process.env.NODE_ENV === 'production',
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none'
    }
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/log-in', login)

app.get('/validar', validar)
    
app.get('/registro', registro)

app.get('/usuarios', obtenerUsuarios)

app.delete('/usuarios', eliminarUsuarios)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})