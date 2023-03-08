const express = require("express");
//const { Sequelize } = require("sequelize");
//const { Sequelize } = require("./app/models");
const db = require("./app/models");
const User = require("./app/models/user")(db.sequelize, db.Sequelize);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.authenticate()
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((err) => {
        console.log("Unable to connect to the database", err);
    });

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Database table is created if not exist.");
    })
    .catch((err) => {
        console.log("Unable to create Database table", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome." });
});

app.post('/users', async (req, res) => {
        if (!req.body.username || !req.body.email) {
            res.status(400).json({ message: "Content is missing."});
            return ;
        }
        const user = await User.findOne({ where: { username: req.body.username } });
        if (user) {
            res.status(409).json({ message: "User already exits." });
            return ;
        }
        const newUser = await User.create(req.body);      
        res.json({ message: "User added successfully.", data: JSON.stringify(newUser.dataValues)});
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log("server is successfully running!");
});