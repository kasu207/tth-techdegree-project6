const express = require('express');
const { data } = require('./data.json');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//routes
const mainRoutes = require('./routes');
app.use(mainRoutes);

//Errors
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });


//localhost Path
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});