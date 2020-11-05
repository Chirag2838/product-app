const express = require('express');
require('./db/db');
const app = express();

const userRoutes = require('./api/routes/user');

app.use(express.json());
app.use(userRoutes);
app.get('*', (req, res) => {
    res.status(404).send('404 not found');
});

const port = 3000;

app.listen(port, () => {
    console.log('server is running on ' + port);
})