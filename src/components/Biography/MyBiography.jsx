import { Typography } from '@material-tailwind/react'
import './MyBiography.css'
import profile from '../../assets/profile.jpg'

const MyBiography = () => {
  return (
    <div
      className="container mx-auto flex flex-col justify-center px-5 py-20 animate__animated animate__fadeInLeft"
      id="About"
    >
      <Typography className="text-white text-5xl my-10">
        {' '}
        &#60; Who I am? <span className="text-gold">/</span> &#62;{' '}
      </Typography>

      <div className="typewriter w-fit text-white grid gap-4 lg:grid-cols-2 lg:mx-0">
        <div className=" flex justify-end">
          <img
            src={profile}
            alt="bio image"
            className="rounded"
            id="bio_image"
          />
        </div>
        <div>
          <Typography className="line-1 anim-typewriter text-7xl">
            Hi !
          </Typography>
          <Typography className="text-xl mt-3">
            I'm Catalin, aka <span className="text-gold">ZeroHenriot</span>. Why
            this nick? I don't know, it just sounds good.
          </Typography>
          <Typography className="text-xl mt-3">
            When I'm not tinkering with color codes, you'll find me immersing
            myself in virtual worlds, armed with a controller and ready to take
            on any enemy (or save damsels in distress!).
          </Typography>{' '}
          <Typography className="text-xl mt-3">
            I also have a soft spot for cats - those little furry beings that
            seem to rule the world (spoiler, they do) - and I could spend hours
            watching funny cat videos online.{' '}
          </Typography>
          <Typography className="text-xl mt-3">
            Despite being a sports enthusiast, I must admit that my actual
            sports participation is limited to the occasional competition on the
            virtual field.
          </Typography>
          <Typography className="text-xl mt-3">
            Oh, and let's not forget that I'm a junior front-end developer on a
            mission to bring a touch of digital magic to the world. So get ready
            to explore my digital universe of code, cats, and pixel-perfect
            wonders! 🎮😸💻
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default MyBiography
