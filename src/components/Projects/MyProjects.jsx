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
import pubzero from '../../../public/assets/pubzero.png'
import linkedin from '../../../public/assets/Linkedin.png'
import weatherapp from '../../../public/assets/WeatherApp.png'
import f1 from '../../../public/assets/F1.png'
import { useSelector } from 'react-redux'

const MyProjects = () => {
  return (
    <>
      <div
        className={`flex flex-col justify-center mt-20 px-5 py-20 ${'animate__animated animate__fadeInLeft'}`}
        id="Projects"
      >
        <Typography className="text-white text-4xl my-10 px-5">
          {' '}
          &#60; {'I miei progetti'} <span className="text-gold">/</span> &#62;{' '}
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
                {
                  "Vuoi una birra e un po' di divertimento? PubZero è il posto perfetto per te! Venite a trovarci nei nostri tre pub"
                }
                !
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
                {
                  'Ti piace la F1? Visita il sito creato da un appassionato per altri appassionati e rimani aggiornato sulla regina del motorsport'
                }
                !
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
                {
                  'Tutti conoscono LinkedIn, giusto? Bene, ecco un clone perfetto del social network professionale più famoso al mondo'
                }
                .
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
                {
                  'Pioverà? Splenderà il sole? O forse nevicherà? Non lo sai? Bene, allora questa app è perfetta per te. Provatela e scoprite come dovreste vestirvi'
                }
                .
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography className="flex justify-between">
                <a
                  href="https://progetto-u3-w2.vercel.app/"
                  target="_blank"
                  className="TryItBtn font-bold"
                >
                  {'Provala'}!
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
