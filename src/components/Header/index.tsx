import { HeaderBar } from './styles'
import logo from '../../assets/logo.png'

import fundoHeader from '../../assets/Vector.png'

export type Props = {
  links?: 'comlink' | 'semlink'
}

const Header = ({ links = 'semlink' }: Props) => (
  <HeaderBar links={links} style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="Container">
      <div className="Headerconteudo">
        <a href="#">Restaurantes</a>
        <img src={logo} alt="efood" />
        <div>0 produto(s) no carrinho</div>
      </div>
      <h3>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h3>
    </div>
  </HeaderBar>
)

export default Header
