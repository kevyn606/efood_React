import { Imagem } from './styles'

import fundoBanner from '../../assets/fundo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${fundoBanner})` }}>
    <div className="Container">
      <div>
        <h2>Italiana</h2>
        <h3>La Dolce Vita Trattoria</h3>
      </div>
    </div>
  </Imagem>
)

export default Banner
