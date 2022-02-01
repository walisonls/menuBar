const express = require("express");
const ejs = require("ejs");
const path = require("path");
var bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    var index = path.join(__dirname + "/pages/index.ejs");
    ejs.renderFile(index, {}, (err, index) => {
        if (err) {
            console.log("Erro404: Erro ao carregar a pagina.");
        }
    });
    res.render(index);
});

const adress = 8045;
app.listen(adress, () => {
    console.log(`Server Runing: http://localhost:${8045}/`);
});