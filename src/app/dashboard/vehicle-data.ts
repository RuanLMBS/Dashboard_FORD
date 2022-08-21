export interface VeiculosDados extends Array<veiculoDados> {}

export interface veiculoDados{
  id: number | string
  vin: string
  odometer: number | string
  tirePressure: number | string
  status: string
  batteryStatus: string
  fuelLevel: string | number
  lat: string | number
  long: string | number
}

export interface VeiculosDataAPI {
  vehicles: VeiculosDados;
}

