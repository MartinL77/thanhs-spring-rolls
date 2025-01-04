import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import LandingPage from './pages/landingPage/LandingPage'
import HomePage from './pages/homePage/HomePage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/recipe" element={<RecipePage />} /> */}
      </Routes>
    </>           
  )
}

export default App
