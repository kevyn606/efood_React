import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const HeaderBar = styled.header<Props>`
  width: 100%;
  height: ${(props) => (props.links === 'semlink' ? '384px' : '186px')};
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;

  .Headerconteudo {
    display: flex;
    justify-content: ${(props) =>
      props.links === 'semlink' ? 'center' : 'space-between'};
    align-items: center;

    font-size: 18px;
    font-weight: bold;

    div {
      display: ${(props) => (props.links === 'semlink' ? 'none' : '')};
    }
  }

  img {
    width: 125px;
  }
  a {
    color: ${cores.vermelho};
    display: ${(props) => (props.links === 'semlink' ? 'none' : '')};
  }

  h3 {
    display: ${(props) => (props.links === 'semlink' ? '' : 'none')};
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding-top: 138px;
  }
`
