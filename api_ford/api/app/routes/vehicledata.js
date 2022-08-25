const { vehicledataAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/vehicledata")
    .get(wrapAsync(vehicledataAPI.list));


  app.route("/vehicledata/:vehicledataID").get(wrapAsync(vehicledataAPI.findById));

  app.route('/vehicledata/signup')
        .post(wrapAsync(vehicledataAPI.register));

  app.route('/vehicledata/exists/:id')
        .get(wrapAsync(vehicledataAPI.checkIdTaken));

  app.route('/vehicledata/exists/:vin')
        .get(wrapAsync(vehicledataAPI.findByVin));
};
