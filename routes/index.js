const express = require('express');
const rootRoutes = require('./root');
const projectRoute = require('./project.js');

const router = express.Router();

const { data } = require('../data/data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.render('index', { projects });
    next();
});

router.use('/', rootRoutes);
router.get('/about', (req, res, next) => {
    res.render('about');
    next();
});

module.exports = router;