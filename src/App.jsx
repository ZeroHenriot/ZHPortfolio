import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'
import MyBiography from './components/Biography/MyByography'
import MyFooter from './components/Footer/MyFooter'
import { useState } from 'react'
import Loader from './components/Loader/Loader'

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
          <MyFooter />
        </>
      ) : null}
    </>
  )
}

export default App
