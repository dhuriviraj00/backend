const { request } = require("express");

const app  =express()

app.get('/',(req,res)=>{
    res.json({
        mesg: 'hello backend12'
    })
})

app.listen(3000)
