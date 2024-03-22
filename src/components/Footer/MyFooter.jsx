import { Typography } from '@material-tailwind/react'
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyFooter = () => {
  return (
    <footer className="w-full bg-[#080215] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  md:justify-between">
        <a href="#">
          <img src="src\assets\logo.png" alt="logo" className="w-10" />
        </a>

        <Typography>
          <a href="https://www.instagram.com/catalin_darii/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="me-3 hover:scale-110 duration-500 "
              style={{ color: '#FFD43B', fontSize: '50px' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/catalin-darii-frontend/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="me-3 hover:scale-110 duration-500 "
              style={{ color: '#FFD43B', fontSize: '50px' }}
            />
          </a>
          <a href="https://github.com/ZeroHenriot" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="me-3 hover:scale-110 duration-500 "
              style={{ color: '#FFD43B', fontSize: '50px' }}
            />
          </a>
          <a
            href="https://discord.com/channels/409742361443434496"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="me-3 hover:scale-110 duration-500 "
              style={{ color: '#FFD43B', fontSize: '50px' }}
            />
          </a>
        </Typography>
        <Typography color="blue-gray" className="text-white font-normal">
          &copy; {new Date().getFullYear()} - Catalin Darii
        </Typography>
      </div>
    </footer>
  )
}

export default MyFooter
