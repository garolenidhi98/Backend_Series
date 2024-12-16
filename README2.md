## How to deploye a backend code in a production environment

# We have to send a request and in return we want some response...and we are building this thing using express framework
# Computer/Mobile(Browser) --request---><----Express---> <---response-- Server

## Steps
1. Jo request aa rhi hai and jo response ja rha hai ye sb handled humara express krta hai..
2. Agar hum koi bhi request bhejte hai to server par koi hona chahiye jo listen kare hamesha and in return response send kare.
3. Jb hum koi site par jate hai to, /: ko bolte hai home route

# Steps to follow on vs code
1. npm init - To initialize the package from node package manager. By this command we ctreate the package.json() file
2. npm install
3. npm install express
4. We have created a server by copying the data from express site to create an server on our machine.

# Code
<!-- const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Nodejs!')
})

app.get('/home', (req,res) => {
   res.send("Home Page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) -->

5. When you have to deploy ur code on production environment so,firstly install this below package...bcz in our code there are most imp information are also there and when we are going to deploy on production so its not safe to push directly...So that we can install this package...and keep our imp information in .env file.
- npm install dotenv package

6. After installing ths package you have to create file as a .env and paste your variable there in uppercase format
7. And then you have to set up .env file in your code...using 2-3 commands like as
<!-- As early as possible in your application, import and configure dotenv:

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
.. or using ES6?

import 'dotenv/config'
That's it. process.env now has the keys and values you defined in your .env file: -->

8. Now you have to push your code on github
9. 

