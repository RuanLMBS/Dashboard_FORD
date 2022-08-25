export interface NovoVeiculo {
  id?: number | string
  vin?: string
  odometer: number | string
  tirePressure: number | string
  status: string
  batteryStatus: string
  fuelLevel: string | number
  lat: string | number
  long: string | number
}
