import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'
import MyFooter from './components/Footer/MyFooter'
import MyBiography from './components/Biography/MyBiography'
import MyProjects from './components/Projects/MyProjects'
import MySkills from './components/Skills/MySkills'
import MyContacts from './components/Contacts/MyContacts'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <MyNavbar />
      <MyBiography />
      <MyProjects />
      <MySkills />
      <MyContacts />
      <MyFooter />
      <Analytics />
    </>
  )
}

export default App
