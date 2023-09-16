import React from 'react'

import ProductList from '../../components/ProductList'
import Prato from '../../models/Prato'
import sushi from '../../assets/imagem.png'

const restaurantes: Prato[] = [
  {
    id: 1,
    capa: sushi,
    avaliacao: 4.9,
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    destacado: 'Destaque da semana',
    tipo: 'Japonesa'
  },
  {
    id: 2,
    capa: sushi,
    avaliacao: 4.9,
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    destacado: 'Destaque da semana',
    tipo: 'Japonesa'
  },
  {
    id: 3,
    capa: sushi,
    avaliacao: 4.9,
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    destacado: 'Destaque da semana',
    tipo: 'Japonesa'
  },
  {
    id: 4,
    capa: sushi,
    avaliacao: 4.9,
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    destacado: 'Destaque da semana',
    tipo: 'Japonesa'
  }
]

const Home = () => (
  <div>
    <ProductList pratos={restaurantes} />
  </div>
)

export default Home
