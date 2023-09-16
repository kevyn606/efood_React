import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  background-color: ${cores.branco};
`
export const Imagem = styled.div`
  width: 100%;
  height: 217px;
  position: relative;
`
export const Img = styled.img`
  width: 100%;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-right: 12px;
  }
`
export const Infos = styled.div`
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }

  .notas {
    gap: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
`
export const Nota = styled.span`
  font-weight: 700;
  font-size: 18px;
`
export const Informação = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 16px 0;
`
