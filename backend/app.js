const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

const CompanyRoute = require('./Routes/company.route');
const CustomerAgentRoute = require('./Routes/customer_agent.route');

require('./DB/config')();

app.use('/company',CompanyRoute);
app.use('/customeragent',CustomerAgentRoute);

console.log('Running at Port: ' + PORT);
app.listen(PORT);