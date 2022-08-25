const { VehicledataDao, VehicleDao } = require("../infra");

const api = {};


api.list = async (req, res) => {
  let { valor } = req.query;
  valor = valor || "";
  console.log(`find vehicle data ${valor}`);
  const vehicledata = await new VehicledataDao(req.db).listAll(valor);
  const result = { vehicleData: vehicledata };
  res.json(result);
};

api.findById = async (req, res) => {
  const { vehicledataID } = req.params;
  console.log("####################################");
  console.log(`find vehicle data by ID ${vehicledataID}`);
  const vehicledata = await new VehicledataDao(req.db).findById(vehicledataID);
  if (vehicledata) {
    res.json(vehicledata);
  } else {
    res.status(404).json({ message: "vehicle data does not exist" });
  }
};

api.register = async (req, res) => {
  const vehicledata = req.body;
  const vehicledataID = await new VehicledataDao(req.db).add(vehicledata);
  res.status(204).end();
};

api.checkIdTaken = async (req, res) => {
  const { id } = req.params;
  const vehicledata = await new VehicledataDao(req.db).findById(id);
  res.json(!!vehicledata);
};

api.findByVin = async (req, res) => {
  const { vehicledataVIN } = req.params;
  console.log("####################################");
  console.log(`find vehicle data by VIN ${vehicledataVIN}`);
  const vehicledata = await new VehicledataDao(req.db).findByVin(vehicledataVIN);
  if (vehicledata) {
    res.json(vehicledata);
  } else {
    res.status(404).json({ message: "vehicle data does not exist" });
  }
};

module.exports = api;
