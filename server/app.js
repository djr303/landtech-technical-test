const createError = require('http-errors');
const express = require('express');
const path = require('path');

const housesRouter = require('./routes/houses');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(housesRouter);

app.use((_, __, next) => {
  next(createError(404));
});

app.use((err, req, res, _) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
