import React from 'react'
import Navbar from './component/Navbar'
import Sliderone from './component/Sliderone'
import Card from './component/Card'
import ViratFashionPage from './component/ViratFashionPage'
import BestSellers from './component/BestSellers'
import WeAreWrogn from './component/WeAreWrogn'
import WrognWallpapers from './component/Wallpapers'
import ServiceHighlights from './component/ServiceHighlights'
import Footer from './component/Footer'
import LoginSignup from './component/LoginSignup'
import TrendingCategories from './component/TrendingCategories'



export default function App() {
  return (
    <div> 
      <Navbar/>
      <Sliderone/>
      <Card/>
      <ViratFashionPage />
      <TrendingCategories />
      <BestSellers />
      <WeAreWrogn />
      <WrognWallpapers />
      <ServiceHighlights />
      <Footer />
      <LoginSignup />
    </div>
  )
}
