// console.log("Hello Nodejs");

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Nodejs!')
// })

// app.get('/home', (req,res) => {
//    res.send("Home Page")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

require('dotenv').config()  //For .env file set up

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send("Hello Nidhi")
})

app.get('/home', (req, res) => {
    res.send("Its Home Page")
})
app.get('/About', (req,res) => {
    res.send('Its About Page')
})

app.get('/contact', (req,res) => {
    res.send("Its Contact Page")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login first!</h1>')
})

//this process.env.PORT is again for .env file setup
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})