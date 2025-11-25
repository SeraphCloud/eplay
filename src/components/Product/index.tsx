import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.it/222x250" alt="game-cover" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt
      ab, molestias perferendis iure ipsum molestiae tenetur, nihil pariatur
      dolorum asperiores. Corporis numquam aliquid est itaque, obcaecati dolorum
      ut voluptate!
    </Descricao>
  </Card>
)

export default Product
