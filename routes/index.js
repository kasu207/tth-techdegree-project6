const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//index Page
router.get('/', (req, res) => {
    res.render('index', { projects });
});

//projects Page(s)
router.get('/projects/:id', (req, res, next) => {
   const projectId = req.params.id;
   const project = projects.find( ({ id }) => id === projectId );
   if (project) {
     res.render('project', { project });
   } else {
     const err = new Error(`Project with the id: ${req.params.id} does not exist!`);
     err.status = 404;
     next(err);
   }
 });

//about Page
router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;