import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twiter.png'
import { FooterContainer } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="Container">
      <img src={logo} alt="efood" />
      <ul>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </ul>
      <h4>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </h4>
    </div>
  </FooterContainer>
)

export default Footer
