const express = require('express');
const mongoose = require("mongoose");
const indexRouter = require('./Router');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/bigdb')
    .then(() => {
        app.use(express.json());

        app.use(express.urlencoded({extended: true}));
        app.use(express.static('public'));
        const cookieParser = require('cookie-parser');
        app.use(cookieParser());

        app.set('view engine', 'ejs');


        app.use('/', indexRouter);


        app.listen(3000, () => {
            console.log('app Run On: http://localhost:3000');
        });
    })
    .catch(console.log);
