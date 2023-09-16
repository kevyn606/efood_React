class Prato {
  tipo: string
  destacado: string
  descricao: string
  titulo: string
  avaliacao: number
  capa: string
  id: number

  constructor(
    id: number,
    capa: string,
    avaliacao: number,
    titulo: string,
    descricao: string,
    destacado: string,
    tipo: string
  ) {
    this.id = id
    this.capa = capa
    this.avaliacao = avaliacao
    this.titulo = titulo
    this.descricao = descricao
    this.destacado = destacado
    this.tipo = tipo
  }
}

export default Prato
