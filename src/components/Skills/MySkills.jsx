import { Progress, Typography } from '@material-tailwind/react'
import './MySkills.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const MySkills = () => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY

      // Adjust this value as needed based on when you want the animations to start
      const triggerPosition = 1100 // For example, trigger the animations when the user scrolls down 300px

      if (scrollPosition > triggerPosition && !animation) {
        setAnimation(true)
      }
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [animation])
  return (
    <div
      className={`container mx-auto py-20 px-5 lg:px-0 flex flex-col ${
        animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
      }`}
      id="Skills"
    >
      <Typography className="text-white text-5xl my-10">
        {' '}
        &#60; Skills <span className="text-gold">/</span> &#62;{' '}
      </Typography>
      <div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faHtml5}
            style={{ color: '#e44d26', fontSize: '50px' }}
          />{' '}
          <Progress
            value={99}
            size="lg"
            color="orange"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faCss3}
            style={{ color: '#0974BC', fontSize: '50px' }}
          />{' '}
          <Progress
            value={99}
            size="lg"
            color="blue"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faJs}
            style={{ color: '#F7E018', fontSize: '50px' }}
          />{' '}
          <Progress
            value={90}
            size="lg"
            color="yellow"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faReact}
            style={{ color: '#61DBFB', fontSize: '50px' }}
          />{' '}
          <Progress
            value={99}
            size="lg"
            color="blue"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faBootstrap}
            style={{ color: '#7908F7', fontSize: '50px' }}
          />{' '}
          <Progress
            value={99}
            size="lg"
            color="purple"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faGit}
            style={{ color: '#e44d26', fontSize: '50px' }}
          />{' '}
          <Progress
            value={90}
            size="lg"
            color="orange"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <FontAwesomeIcon
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
            icon={faGithub}
            style={{ color: 'gold', fontSize: '50px' }}
          />{' '}
          <Progress
            value={90}
            size="lg"
            color="yellow"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
            style={{ width: '50px' }}
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
          >
            <g clipPath="url(#prefix__clip0)">
              <path
                fill="#38bdf8"
                fillRule="evenodd"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h54v32.4H0z" />
              </clipPath>
            </defs>
          </svg>
          <Progress
            value={80}
            size="lg"
            color="blue"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
        <div className="progress-container mt-5 flex items-center justify-between">
          <svg
            width="50"
            viewBox="0 0 256 244"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            className={`${
              animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
            }`}
          >
            <path
              d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
              fill="#764ABC"
            />
          </svg>
          <Progress
            value={90}
            size="lg"
            color="purple"
            className={`mx-3 w-11/12 ${
              animation ? 'animate__animated animate__fadeInRight' : 'hidden'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
export default MySkills
