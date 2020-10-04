const express = require('express');
const router = express.Router();

const { data } = require('../data/data.json');
const { projects } = data;

router.get('/', (req, res) => {
    const projectId = projects.id;
    res.redirect(`/projects/${projectId}`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { project_name, description, technologies, live_link, github_link, image_urls } = projects[id - 1];
    const templateData = { id };
    templateData.project_name = project_name;
    templateData.description = description;
    templateData.technologies = technologies;
    templateData.live_link = live_link;
    templateData.github_link = github_link;
    templateData.image_urls = image_urls;
    if(templateData.id){
        res.render('project', templateData);
    }
    else {
        const err = new Error();
        err.status = 404;
        err.message = `Looks like the quote you requested doesn't exist.`
        next(err);
    }
    
});
module.exports = router;