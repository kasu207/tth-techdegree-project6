const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//routes
const routes = require('./routes/index');
app.use('/', routes);

//Errors HANDLERS
// 404 Error handler *
app.use((req, res, next) => {
  const err = new Error('ERROR: 404 - I am sorry, the page you\'ve requested, could not be found');
  err.status = 404;
  next(err);
});
/* Global error Handler */
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(err.status || 404 );
    err.message = err.message;
    res.locals.error = err;
    console.log(err.message);
    return res.render('page-not-found', { err });
  } else if (err.status === 500 ) {
    res.status(err.status || 500);
    err.message = err.message || "Looks like there was a problem on the server";
    res.locals.error = err;
    console.log(err.message);
    res.render('error', { err });
  }
});

//localhost Path
app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});