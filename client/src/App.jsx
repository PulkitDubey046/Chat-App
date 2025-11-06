import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import bgImage from './assets/bgImage.svg'

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="min-h-screen bg-cover bg-center bg-no-repeat">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
