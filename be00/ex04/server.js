const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { emailValidator, usernameValidator, usernameLengthValidator, passwordValidator, passwordLengthValidator } = require('./my_validator');

dotenv.config();

const port = process.env.PORT || 4242;

app.use(express.json());

app.post('/main', (req, res) => {
    const { email, username, password_request } = req.body;
    
    if (
        emailValidator(email) &&
        usernameValidator(username) &&
        usernameLengthValidator(username, 6) &&
        passwordValidator(password_request) &&
        passwordLengthValidator(password_request, 8)
        ) {
            res.status(200).json({ result: true });
        } else {
            res.status(400).json({ result: false });
        }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
