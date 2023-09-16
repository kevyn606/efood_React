import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'

import Home from './pages/Home/index'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
