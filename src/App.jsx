import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'

import MyFooter from './components/Footer/MyFooter'
import { useState } from 'react'
import Loader from './components/Loader/Loader'
import MyBiography from './components/Biography/MyBiography'
import MyProjects from './components/Projects/MyProjects'
import MySkills from './components/Skills/MySkills'
import MyContacts from './components/Contacts/MyContacts'

function App() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(true)
  }

  return (
    <>
      <Loader onClick={handleClick} clicked={clicked} />
      {clicked ? (
        <>
          <MyNavbar />
          <MyBiography />
          <MyProjects />
          <MySkills />
          <MyContacts />
          <MyFooter />
        </>
      ) : null}
    </>
  )
}

export default App
