import express from "express";
const app = express()
const port = 3000;
import web from './routes/web.js'

// Set Template Engine
app.set('view engine', 'ejs')

// Static files
app.use(express.static('public'))

//Load Routes
app.use('/',web)

 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
