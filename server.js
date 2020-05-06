// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views/pugViews');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log('always middleware');
    next();
});

app.use('/admin', adminRoutes.router);

app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404.pug');
});




app.listen(8888);
// const server = http.createServer(app);

// server.listen(1111);