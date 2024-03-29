const { page } = require('@asl/service/ui');
const datatable = require('@asl/pages/pages/common/routers/datatable');
const { redirectOnPost } = require('@asl/pages/pages/establishment/rops/middleware');
const schema = require('./schema');

module.exports = settings => {
  const app = page({
    ...settings,
    root: __dirname
  });

  app.use(datatable({
    configure: (req, res, next) => {
      req.datatable.apiPath = `/rops/${req.year}/establishments`;
      req.datatable.sort = { column: 'name', ascending: true };
      next();
    }
  })({ schema }));

  app.use(redirectOnPost({ target: 'ropsReporting.establishments' }));

  return app;
};
