import { useEffect, useState } from 'react'

const Loader = () => {
  const [filled, setFilled] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (filled < 100) {
        setFilled((prev) => prev + 2)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setHidden(true)
        }, 1000)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [filled])

  return (
    <div className="h-full flex items-center bg-transparent">
      <div className={`progressbar ${hidden ? 'hidden' : ''} `}>
        <div
          style={{
            width: `${filled}%`,
            transition: 'width 0.5s',
          }}
          className="h-full bg-transparent"
        ></div>
        <span
          className={`progressPercent ${filled === 100 ? 'completed' : ''}`}
        >
          {filled}%
        </span>
      </div>
    </div>
  )
}
export default Loader
