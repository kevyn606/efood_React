import Prato from '../../models/Prato'
import Product from '../Product'
import { ProductListContainer } from './style'

export type Props = {
  pratos: Prato[]
}

export const ProductList = ({ pratos }: Props) => (
  <ProductListContainer className="Container">
    {pratos.map((prato) => (
      <Product
        key={prato.id}
        title={prato.titulo}
        categoria={prato.tipo}
        destaque={prato.destacado}
        description={prato.descricao}
        nota={prato.avaliacao}
        image={prato.capa}
      />
    ))}
  </ProductListContainer>
)

export default ProductList
