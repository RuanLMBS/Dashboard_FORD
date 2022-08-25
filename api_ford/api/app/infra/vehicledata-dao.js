const vehicledataConverter = (row) => ({
  id: row.vehicledata_id,
  vin: row.vehicledata_vin,
  odometer: row.vehicledata_odometer,
  tirePressure: row.vehicledata_tirePressure,
  status: row.vehicledata_status,
  batteryStatus: row.vehicledata_batteryStatus,
  fuelLevel: row.vehicledata_fuelLevel,
  lat: row.vehicledata_lat,
  long: row.vehicledata_long,
});

class VehicledataDao {
  constructor(db) {
    this._db = db;
  }


  listAll(value) {
    return new Promise((resolve, reject) => {
      this._db.all(
        `
              SELECT
              vehicledata_id,
              vehicledata_vin,
              vehicledata_odometer,
              vehicledata_tirePressure,
              vehicledata_status,
              vehicledata_batteryStatus,
              vehicledata_fuelLevel,
              vehicledata_lat,
              vehicledata_long
                FROM VEHICLEDATA
                WHERE vehicledata_vin LIKE $codigo
			UNION
			  SELECT
        vehicledata_id,
        vehicledata_vin,
        vehicledata_odometer,
        vehicledata_tirePressure,
        vehicledata_status,
        vehicledata_batteryStatus,
        vehicledata_fuelLevel,
        vehicledata_lat,
        vehicledata_long
          FROM VEHICLEDATA
                WHERE vehicledata_vin LIKE $codigo
                `,
        { $codigo: `%${value}%` },
        (err, rows) => {
          if (err) {
            console.log("++++ERRO+++");
            console.log(err);
            return reject("Can`t load vehicle data");
          }
          const vehicledata = rows.map(vehicledataConverter);
          return resolve(vehicledata);
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this._db.get(
        `
        SELECT
        vehicledata_id,
        vehicledata_vin,
        vehicledata_odometer,
        vehicledata_tirePressure,
        vehicledata_status,
        vehicledata_batteryStatus,
        vehicledata_fuelLevel,
        vehicledata_lat,
        vehicledata_long
          FROM VEHICLEDATA
                WHERE vehicledata_id = ?
                `,
        [id],
        (err, row) => {
          console.log(row);
          if (err) {
            console.log(err);
            return reject("");
          }
          //return resolve(vehicledataConverter(row));
          if(row) resolve(vehicledataConverter(row));
          resolve(null);
        }
      );
    });
  }

  add(vehicledata) {
    return new Promise((resolve, reject) => {

        this._db.run ( `
            INSERT INTO vehicleData (
                vehicledata_id,
                vehicledata_vin,
                vehicledata_odometer,
                vehicledata_tirePressure,
                vehicledata_status,
                vehicledata_batteryStatus,
                vehicledata_fuelLevel,
                vehicledata_lat,
                vehicledata_long
             ) values ( ?,?,?,?,?,?,?,?,? )
        `,
            [
                vehicledata.id,
                vehicledata.vin,
                vehicledata.odometer,
                vehicledata.tirePressure,
                vehicledata.status,
                vehicledata.batteryStatus,
                vehicledata.fuelLevel,
                vehicledata.lat,
                vehicledata.long,
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Can`t register new vehicleData');
                }
                console.log(`Vehicle Data ${vehicledata.vin} registered!`)
                resolve();
            });
    });
}

}

module.exports = VehicledataDao;
