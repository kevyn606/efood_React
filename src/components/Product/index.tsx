import Tag from '../Tag'

import estrela from '../../assets/estrela (1).png'
import {
  Card,
  Imagem,
  Img,
  Informação,
  Infos,
  Nota,
  Tags,
  Titulo
} from './styles'
import Button from '../Button'

type Props = {
  title: string
  categoria: string
  destaque: string
  description: string
  nota: number

  image: string
}

const Product = ({
  title,
  categoria,
  destaque,
  nota,
  description,

  image
}: Props) => (
  <Card>
    <Imagem>
      <Img src={image} alt={title} />
      <Tags>
        <Tag>{destaque}</Tag>
        <Tag>{categoria}</Tag>
      </Tags>
    </Imagem>
    <Infos>
      <div>
        <Titulo>{title}</Titulo>
        <div className="notas">
          <Nota>{nota}</Nota>
          <img src={estrela} alt="estrela" />
        </div>
      </div>
      <Informação>{description}</Informação>
      <Button title={'Saiba mais'}>Saiba mais</Button>
    </Infos>
  </Card>
)

export default Product
