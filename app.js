const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//routes
const mainRoutes = require('./routes');
app.use(mainRoutes);

//routes - projects 
const projectRoutes = require('./routes/projects');
app.use('/projects', projectRoutes);

//Errors
app.use((req, res, next) => {
  const err = new Error('I am sorry, the page you\'ve requested, could not be found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  err.message = err.message || "Looks like there was a problem on the server";
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


//localhost Path
app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});