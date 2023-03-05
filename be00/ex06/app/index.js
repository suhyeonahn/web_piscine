const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4200;

// use middleware packages
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use a router
app.use('/api/v1/users', userRouter);

// Use environment variables
const environment = process.env.NODE_ENV || 'development';
console.log(`[ ${environment.toUpperCase()} ] Server is running at http://localhost:${PORT}`);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
