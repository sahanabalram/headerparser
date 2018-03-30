const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = module.exports = express();
const PORT = process.env.port || 3000;
app.use(express.static('app/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());

// API url
var apiURL = "/api/whoami";
app.get(apiURL,function(request,response){
    var language = request.acceptsLanguages;
    var software;
    var ipAddress = request.ip;
    response.json({"ipAddress": ipAddress});
});
app.listen(PORT,function(){
    console.log("App is listening on:" + PORT);
})