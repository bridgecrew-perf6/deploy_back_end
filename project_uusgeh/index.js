const dotenv = require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin')
const connection = require('./database')

app.use(express.json());
app.use(express.static('public'));
app.use('/', apiRoutes)
app.use('/admin', adminRoutes)

app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server`
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
