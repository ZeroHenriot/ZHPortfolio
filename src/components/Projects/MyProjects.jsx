import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Typography,
} from '@material-tailwind/react'

import './MyProject.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import pubzero from '../../assets/pubzero.png'
import linkedin from '../../assets/Linkedin.png'
import weatherapp from '../../assets/WeatherApp.png'
import f1 from '../../assets/F1.png'

const MyProjects = () => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY

      // Adjust this value as needed based on when you want the animations to start
      const triggerPosition = 50 // For example, trigger the animations when the user scrolls down 300px

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
    <>
      <div
        className={`container mx-auto flex flex-col justify-center mt-20 py-20 ${
          animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
        }`}
        id="Projects"
      >
        <Typography className="text-white text-4xl my-10 px-5">
          {' '}
          &#60; My Projects <span className="text-gold">/</span> &#62;{' '}
        </Typography>
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl"
          prevArrow={false}
          nextArrow={false}
          autoplay={true}
          loop={true}
        >
          <Card className={`mt-6 w-full md:px-24 cards justify-between `}>
            <CardHeader color="blue-gray" className="relative">
              <img src={pubzero} alt="pubzero-project" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-2 text-gold">
                PubZero
              </Typography>
              <Typography className="text-white">
                Want a beer and some fun? PubZero is the perfect place for you!
                Come visit us at our three pubs!
              </Typography>
            </CardBody>
            <CardFooter>
              <Typography className="flex justify-end">
                <a
                  href="https://github.com/ZeroHenriot/pubzero"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gold text-3xl duration-700 hover:scale-125"
                  />
                </a>
              </Typography>
            </CardFooter>
          </Card>
          <Card className={`mt-6 w-full md:px-24 cards justify-between `}>
            <CardHeader color="blue-gray" className="relative">
              <img src={f1} alt="capstone-project" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-2 text-gold">
                Capstone Project
              </Typography>
              <Typography className="text-white">
                Do you like F1? Visit the website created by a passionate fan
                for other fans and stay updated on the queen of motorsport!
              </Typography>
            </CardBody>{' '}
            <CardFooter>
              <Typography className="flex justify-end">
                <a
                  href="https://github.com/ZeroHenriot/capstone-project"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gold text-3xl duration-700 hover:scale-125"
                  />
                </a>
              </Typography>
            </CardFooter>
          </Card>
          <Card className={`mt-6 w-full md:px-24 cards justify-between `}>
            <CardHeader color="blue-gray" className="relative">
              <img src={linkedin} alt="linkedin-project" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-2 text-gold">
                Linkedin Clone
              </Typography>
              <Typography className="text-white">
                Everyone knows LinkedIn, right? Well, here's a perfect clone of
                the world's most renowned professional social network."
              </Typography>
            </CardBody>{' '}
            <CardFooter>
              <Typography className="flex justify-end">
                <a
                  href="https://github.com/plmcst96/bw3-linkedin"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gold text-3xl duration-700 hover:scale-125"
                  />
                </a>
              </Typography>
            </CardFooter>
          </Card>
          <Card className={`mt-6 w-full md:px-24 cards justify-between `}>
            <CardHeader color="blue-gray" className="relative">
              <img src={weatherapp} alt="weatherapp-project" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-2 text-gold">
                Weather App
              </Typography>
              <Typography className="text-white">
                It will rain? Will the sun shine? Or maybe it will snow? You
                don't know? Well, then this app is perfect for you. Try it and
                find out how you should dress.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography className="flex justify-between">
                <a
                  href="https://progetto-u3-w2.vercel.app/"
                  target="_blank"
                  className="TryItBtn font-bold"
                >
                  Try It!
                </a>
                <a
                  href="https://github.com/ZeroHenriot/progetto-u3-w2"
                  target="_blank"
                >
                  {' '}
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gold text-3xl duration-700 hover:scale-125"
                  />
                </a>
              </Typography>
            </CardFooter>
          </Card>
        </Carousel>
      </div>
    </>
  )
}
export default MyProjects
