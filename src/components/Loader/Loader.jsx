import React from 'react'
import { Typography } from '@material-tailwind/react'
import './Loader.css'

const Loader = ({ onClick, clicked }) => {
  const handleClick = () => {
    if (onClick) {
      onClick() // Chiamare la funzione onClick passata come prop
    }
  }

  return (
    <div
      className={`flex justify-center absolute  ${clicked ? 'hidden' : ''}`}
      onClick={handleClick}
      id="loader"
    >
      <div
        className="rounded-full animate-spin-slow relative "
        id="spinner"
      ></div>

      <div
        className="rounded-full flex justify-center items-center absolute"
        id="spinner-center"
      >
        <div className="typewriter-loader">
          <Typography className="text-5xl md:text-7xl text-center animate-pulse text-[#9376a8]">
            Start !
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Loader
