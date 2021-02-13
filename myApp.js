var express = require('express');
var app = express();




// get json data
app.get("/json", (req, res)=>{
    
    if (process.env.MESSAGE_STYLE==="uppercase"){
        var response = "Hello json".toUpperCase(); 
        res.json({"message": response});
    } else {
        var response = "Hello json";
        res.json({"message": response});
    }
  });































 module.exports = app;
