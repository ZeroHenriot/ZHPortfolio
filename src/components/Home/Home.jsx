import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

const Home = () => {
  const [hour, setHour] = useState(format(new Date(), 'HH:mm:ss'))
  const [day, setDay] = useState(format(new Date(), 'dd'))
  const [month, setMonth] = useState(format(new Date(), 'MMM'))

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setHour(format(now, 'HH:mm:ss'))

      // Aggiorna la data solo se è cambiata
      const newDay = format(now, 'dd')
      const newMonth = format(now, 'MMM')
      if (newDay !== day) {
        setDay(newDay)
        setMonth(newMonth)
      }
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [day]) // Aggiungi 'day' come dipendenza

  return (
    <>
      <div className="absolute bottom-0 left-0 flex z-[97] animate__animated animate__fadeInLeft">
        <h1 className="text-5xl md:text-4.5xl xl:text-6.9xl 2xl:text-7xl 3xl:text-8xl mb-6 2xl:mb-2">
          Catalin Darii
          <span className="hidden md:inline">-</span> Frontend Developer
        </h1>
      </div>
      <div className="absolute top-0 flex flex-col h-full w-full justify-center items-center animate__animated animate__fadeIn animate__slower">
        <div className="flex items-baseline">
          <p className="text-9xl">{day}</p>
          <p className="text-6xl">{month}</p>
        </div>
        <p className="text-9xl hidden md:block">{hour}</p>
      </div>
      <div className="absolute md:top-1/14 top-0 md:left-0 flex md:block w-full justify-center animate__animated animate__fadeInDown">
        <Link
          target="blank"
          to="https://www.google.com/maps/place/Roma+RM/@41.9102088,12.3711913,52218m/data=!3m2!1e3!4b1!4m6!3m5!1s0x132f6196f9928ebb:0xb90f770693656e38!8m2!3d41.8967068!4d12.4822025!16zL20vMDZjNjI?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D"
          className="writing-mode-vertical-based"
        >
          Based 41.902782°N - 12.496366°E
        </Link>
      </div>
    </>
  )
}

export default Home
