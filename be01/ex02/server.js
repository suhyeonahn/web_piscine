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

app.post('/users', async (req, res) => {
    try {
        if (!req.body.username || !req.body.email) {
            res.status(400).json({ message: "Content is missing."});
            return ;
        }
        const user = await User.findOne({ where: { username }});
        if (user) {
            res.status(409).json({ message: "User already exits." })
        }
        const newUser = await User.create(req.body);
        res.json({ message: "User added successfully."} + newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});