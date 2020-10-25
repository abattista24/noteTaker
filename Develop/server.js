const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ROUTES
// ===================================

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '', '/index.html'));
});



// LISTENER
//====================================

app.listen(PORT, function(){
    console.log("listening on PORT" + PORT)
});