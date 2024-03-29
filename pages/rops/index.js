const { Router } = require('express');
const routes = require('./routes');
const metrics = require('../../lib/middleware/metrics');
const { ropsYears } = require('@asl/pages/constants/index');
const { NotFoundError } = require('../../lib/errors');

module.exports = settings => {
  const app = Router();

  app.use(metrics(settings));

  app.get('/', (req, res, next) => {
    const now = new Date();
    const year = now.getMonth() < 6 ? now.getFullYear() - 1 : now.getFullYear();
    res.redirect(req.buildRoute('ropsReporting.summary', { year }));
  });

  app.param('year', (req, res, next, year) => {
    if (!year.match(/^20[0-9]{2}/)) {
      throw new NotFoundError();
    }
    req.year = parseInt(year, 10);
    res.locals.static.year = req.year;
    res.locals.static.ropsYears = ropsYears;
    next();
  });

  app.get('/:year*', (req, res, next) => {
    return req.api(`/rops/${req.year}/summary`)
      .then(response => {
        res.locals.static.ropsSummary = response.json.data;
      })
      .then(() => next())
      .catch(next);
  });

  return app;
};

module.exports.routes = routes;
