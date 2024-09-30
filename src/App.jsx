import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'
import MyFooter from './components/Footer/MyFooter'
import MyBiography from './components/Biography/MyBiography'
import MyProjects from './components/Projects/MyProjects'
import MySkills from './components/Skills/MySkills'
import MyContacts from './components/Contacts/MyContacts'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Background from './components/Background/Background'
// import Loader from './components/Loader/Loader'
// import { useEffect, useState } from 'react'

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <MyNavbar />
        <main className="grow h-screen">
          <Background />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<MyBiography />} />
            <Route path="/Projects" element={<MyProjects />} />
            <Route path="/Skills" element={<MySkills />} />
            <Route path="/Contacts" element={<MyContacts />} />
          </Routes>
        </main>
        <MyFooter />
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App
