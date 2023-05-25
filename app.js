const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const cors = require('cors');

const app = express();

app.use(cors());

const candyRoutes = require('./routes/candy');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/candy', candyRoutes);

app.use(errorController.get404);

sequelize
//.sync({force: true})
.sync()
.then(result => {
    console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});

