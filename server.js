const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Used for easy parsing user-agent for response
const useragent = require("express-useragent");

const app = module.exports = express();
const PORT = process.env.port || 3000;
app.use(express.static('app/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(useragent.express());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js") (app);
app.listen(PORT,function(){
    console.log("App is listening on:" + PORT);
})