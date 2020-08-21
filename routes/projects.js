const express = require('express');
const router = express.Router();

const { data } = require('../data.json');
const { projects } = data;

router.get( '/', ( req, res ) => {
    const projectId = projects.id
    res.redirect( `/projects/${projectId}` )
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const templateData = { id };
    res.render('project', templateData);
});



module.exports = router;