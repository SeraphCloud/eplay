import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <div className="container">
        <GlobalCss />
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
