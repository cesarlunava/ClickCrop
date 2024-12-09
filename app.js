const express = require('express')
const app = express()
const port = 3000
//Get the client
const mysql = require('mysql2/promise');
const cors = require('cors')
const session = require('express-session')
const md5 = require('md5')
