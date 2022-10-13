const router = require('express').Router();

const apiRoutes = require('./api');

const homeRouter = require('./home-routes.js');

router.use('/api', apiRoutes);

router.use('/', homeRouter);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;