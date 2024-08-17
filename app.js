const express = require('express');
const bosyparser = require('body-parser');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static("style"));
app.use(bodyParser.urlencoded({extended :true}));




app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});

app.post("/", function(req,res){
     const comm = req.body.message;
     const na = req.body.nameofperson;
     var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'mishraswarnima7@gmail.com',
            pass:'ydgo tzli wzit nzdx'

        }
     })
     var mailOptions ={
        from:'mishraswarnima7@gmail.com',
        to: req.body.username,
        cc: 'mishraswarnima7@gmail.com',
        subject: 'Thanks for giving feedback' + na,
        text:'Thanks for your message You have send to us -->'+ comm
     };


     transpoter.sendMail(mailOptions, function(error,info){

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
            console.log("email sent" + info.response);
        }
     })

     });
     





app.listen(3000, function(){
    console.log("server started at 3000");
})