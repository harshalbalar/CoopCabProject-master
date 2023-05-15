const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

const CompanyRoute = require('./Routes/company.route');

require('./DB/config')();

app.use('/company',CompanyRoute);

console.log('Running at Port: ' + PORT);
app.listen(PORT);