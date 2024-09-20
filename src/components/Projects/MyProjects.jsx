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
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../redux/actions/actions'

const MyProjects = () => {
  const projects = useSelector((state) => state.projects.content)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjects())
  }, [])
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
          {projects.map((project, index) => (
            <>
              <Card
                className={`mt-6 w-full md:px-24 cards justify-between `}
                key={index}
              >
                <CardHeader color="blue-gray" className="relative">
                  <img src={project.photo} alt="pubzero-project" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" className="mb-2 text-gold">
                    {project.name}
                  </Typography>
                  <Typography className="text-white">
                    {project.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Typography className="flex justify-between">
                    {project.deployed ? (
                      <a
                        href={project.link}
                        target="_blank"
                        className="TryItBtn font-bold"
                      >
                        Provala!
                      </a>
                    ) : null}

                    <a href={project.github} target="_blank">
                      {' '}
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-gold text-3xl duration-700 hover:scale-125"
                      />
                    </a>
                  </Typography>
                </CardFooter>
              </Card>
            </>
          ))}
        </Carousel>
      </div>
    </>
  )
}
export default MyProjects
