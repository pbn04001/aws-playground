const kinesisRoutes = require('./kinesis/kinesis_routes')

module.exports = function(app, db) {
  kinesisRoutes(app, db)
  app.get(`/`, (req, res) => {
    res.send('HEY!')
  })
};
