const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.use(express.json())

// DB Connection:
const conn = require('./db/conn')
conn()

app.listen(3000, function() {
    console.log('Servidor online!')
})





// rafavanzele
// wVCgglafAgZngaug

// mongodb+srv://rafavanzele:<password>@cluster0.xrjm2sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0