import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.branco};
  padding: 32px;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 32px;
      font-weight: 100;
    }

    h3 {
      font-size: 32px;
      font-weight: 900;
    }
  }
`
