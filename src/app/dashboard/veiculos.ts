export interface Veiculos extends Array<Veiculo> {} // Veiculos tem todos os itens de Veiculo

export interface Veiculo{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
