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
            console.log("req.body", req.body);
            const condition = { username: req.body.username };
            const db = client.db('test1');
            let collection = db.collection('userdata');
            collection.findOne(condition, (function (err, result) {
                if (err) {
                    console.log("getting error while select one command", err);
                    throw err;
                }

                console.log('array', result);
                if (result && result.password && result.password == req.body.password) {
                    res.json(result);
                }
                else {
                    res.status(400).json({
                        message: "password doesn't match"
                    })
                }

            }));
        }
    });
});

app.post("/api/v1.0/serviceprovider/employee", (req, res) => {
    if (!req.body.firstName) {
        return res.status(400).json({ Message: "First Name of the employee is required." });
    }

    if (!req.body.lastName) {
        return res.status(400).json({ Message: "Last Name of the employee is required." });
    }

    if (!req.body.mobileNo) {
        return res.status(400).json({ Message: "Contact number of employee is required." });
    }

    if (!req.body.email) {
        return res.status(400).json({ Message: "Email ID of employee is required" })
    }
    if (!req.body.panNo) {
        return res.status(400).json({ Message: "PAN Number of employee is required" })
    }
    if (!req.body.adhaarNo) {
        return res.status(400).json({ Message: "Adhaar Number of employee is required" })
    }

    if ((req.body.mobileNo + "").length !== 10) {
        return res.status(400).json({ Message: "Mobile Number should have 10 digits" })
    }
    var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (req.body.panNo.regpan) {
        return res.status(400).json({ Message: "PAN Number is not valid" })
    }
    if ((req.body.adhaarNo + "").length !== 12) {
        return res.status(400).json({ Message: "Adhaar Number should have 12 digits" })
    }


    MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            throw err;
            
        }
        else {
            console.log("req.body", req.body);
            const db = client.db('test2');
            let collection = db.collection('employee');
            let data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobileNo: req.body.mobileNo,
                email: req.body.email,
                panNo: req.body.panNo,
                adhaarNo: req.body.adhaarNo,
                adress: req.body.adress,
                gender: req.body.gender,
                qualification: req.body.qualification
            }
            collection.insertOne(data, (function (err, result) {
                if (err) {
                    console.log("getting error while filling employee details", err);
                    res.status(500).json({ Message: "Some error occurred while inserting the data." });
                }

                res.status(200).json({
                    message: "Employee record created"
                })

            }));
        }
    });

    res.json({ mess: "done" });
})
app.listen(8080);
console.log("server listening to port no 8080");