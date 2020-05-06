const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const ErrorController = require('./controllers/error');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views/pugViews');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(ErrorController.get404);

app.listen(8888);
