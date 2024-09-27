import { Card, Dialog, DialogBody, Typography } from '@material-tailwind/react'
import './MyProject.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../redux/actions/actions'

const MyProjects = () => {
  const projects = useSelector((state) => state.projects.content)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl)
    setOpen(true)
  }

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      <div
        className={`flex flex-col justify-center px-6 md:px-24 py-16 w-full min-h-screen animate__animated animate__fadeInLeft overflow-y-auto `}
        id="Projects"
      >
        <Typography className="text-4xl my-10">Progetti</Typography>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } justify-between items-start mt-6 w-full h-auto md:h-[400px] shadow rounded-xl `}
          >
            <Card
              className={`h-full w-full md:w-1/2 bg-transparent shadow-none text-black mb-4 md:mb-0`}
            >
              <img
                src={project.photo}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleOpen(project.photo)}
              />
            </Card>
            <Card
              className={`w-full h-full md:w-1/2 bg-transparent shadow-none p-5 justify-between text-black`}
            >
              <Typography variant="h5" className="mb-2 text-darkgold">
                {project.name}
              </Typography>
              <Typography>{project.description}</Typography>

              <Typography className="flex justify-between mt-2">
                {project.deployed ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="TryItBtn font-bold"
                  >
                    Provala!
                  </a>
                ) : null}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-darkgold text-3xl duration-700 hover:scale-125"
                  />
                </a>
              </Typography>
            </Card>
          </div>
        ))}
      </div>

      <Dialog
        size="xl"
        open={open}
        handler={() => setOpen(false)}
        className="bg-transparent"
      >
        <DialogBody>
          <img
            alt="Project"
            className="w-full h-full rounded-lg object-cover object-center"
            src={selectedImage}
          />
        </DialogBody>
      </Dialog>
    </>
  )
}

export default MyProjects
