import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident_evil from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import star_wars from '../../assets/star_wars.png'
import zelda from '../../assets/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    title: 'Resident Evil 4 - Remake',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['10%', 'R$250'],
    image: resident_evil
  },
  {
    id: 2,
    category: 'RPG',
    title: 'Diablo IV',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['10%', 'R$250'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação/Aventura',
    title: 'Star Wars',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['10%', 'R$250'],
    image: star_wars
  },
  {
    id: 4,
    category: 'Aventura',
    title: 'Zelda',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['10%', 'R$250'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 1,
    category: 'Ação',
    title: 'Resident Evil 4 - Remake',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['17/12'],
    image: resident_evil
  },
  {
    id: 2,
    category: 'RPG',
    title: 'Diablo IV',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['17/12'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação/Aventura',
    title: 'Star Wars',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['17/12'],
    image: star_wars
  },
  {
    id: 4,
    category: 'Aventura',
    title: 'Zelda',
    description: 'Descrição daora do jogo',
    system: 'Windows | PS5',
    infos: ['17/12'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
