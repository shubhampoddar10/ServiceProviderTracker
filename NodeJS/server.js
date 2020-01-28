let express = require("express");
let cors = require("cors");
let MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.post("/node", (req, res) => {
    MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            throw err;
        }
        else {
            console.log("req.body",req.body);
            const condition = {username: req.body.username};
            const db = client.db('test1');
            let collection = db.collection('userdata');
            collection.findOne(condition,(function (err, result){
                if(err){
                    console.log("getting error while select one command",err);
                    throw err;
                }
                    
                console.log('array',result);
                if(result && result.password && result.password == req.body.password){
                    res.json(result);
                }
                else{
                    res.json({
                        message : "password doesn't match"
                    })
                }

             }));
        }
    });
});
app.listen(8080);
console.log("server listening to port no 8080");