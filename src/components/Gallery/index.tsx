import Section from '../Section'

import example from '../../assets/diablo.png'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={example} alt="example-pic" />
      </Item>
      <Item>
        <img src={example} alt="example-pic" />
      </Item>
      <Item>
        <img src={example} alt="example-pic" />
      </Item>
      <Item>
        <img src={example} alt="example-pic" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
