const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static file
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine','pug');//set a template engine as pug
app.set('views',path.join(__dirname,'views'));//set the view directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con = "This is the best online content on internet so far so used it wisely"
    const params = {'title':'PubG is the best game ', "content": con}
    res.status(200).render('index.pug',params);
})


app.post('/',(req,res)=>{
    Name = req.body.name
    email = req.body.email
    number = req.body.number
    address = req.body.address
    more = req.body.more

    let outputTOwrite = `The name of th client is ${Name},${number}yrars old, email address is${email},
    residing at ${address}.MOre about hs/her${more}`
    fs.writeFileSync('output.txt',outputTOwrite)

    const params = {'message':'Your form is submitted successfully'}
    res.status(200).render('index.pug',params);
})

// STARTS THE SERVER
app.listen(port,()=>{
    console.log(`the appliction starts successfully on port ${port}`)
});