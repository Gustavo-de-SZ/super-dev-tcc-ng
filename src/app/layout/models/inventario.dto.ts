export interface InventarioResponse {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  sistemaOperacional: string;
  processador: string;
  memoriaRAM: string;
  armazenamento: string;
  observacoes?: string;
}

export interface InventarioRequest {
  nome: string;
  tipo: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  sistemaOperacional: string;
  processador: string;
  memoriaRAM: string;
  armazenamento: string;
  observacoes?: string;
}
