const express = require("express");
const cors = require("cors");
const db = require("./app/models/index.js");
const User = require("./app/models/user.js");

const app = express();

var corsOptions = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function main() {
    await db.sequelize.sync();
    console.log('Model synchronized with database');
}

main();

db.sequelize.authenticate()
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((err) => {
        console.log("Unable to connect to the database", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome." });
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});