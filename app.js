const express = require('express');
const employeeRoutes = require('./src/routes/employee');
const authorize = require('./src/security/token');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1/employee', authorize, employeeRoutes);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
