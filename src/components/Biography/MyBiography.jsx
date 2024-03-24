import { Typography } from '@material-tailwind/react'
import './MyBiography.css'
import profile from '../../assets/profile.jpg'

import { useSelector } from 'react-redux'

const MyBiography = () => {
  const lang = useSelector((state) => state.Language.lang)

  return (
    <div
      className="container mx-auto flex flex-col justify-center px-5 py-20 animate__animated animate__fadeInLeft"
      id="About"
    >
      <Typography className="text-white text-4xl my-10">
        {' '}
        &#60; {lang ? 'Who am I? ' : 'Chi sono? '}
        <span className="text-gold">/</span> &#62;{' '}
      </Typography>

      <div
        className={`${
          lang ? 'typewriter-en' : 'typewriter-it'
        } w-fit text-white grid gap-4 lg:grid-cols-2 lg:mx-0`}
      >
        <div className=" flex justify-end">
          <img
            src={profile}
            alt="bio image"
            className="rounded"
            id="bio_image"
          />
        </div>
        <div>
          <Typography
            className={`${
              lang ? 'line-en anim-typewriter-en' : 'line-it anim-typewriter-it'
            } text-7xl`}
          >
            {lang ? 'Hi' : 'Ciao'} !
          </Typography>
          <Typography className="text-xl mt-3">
            {lang ? "I'm " : 'Sono'} Catalin, aka{' '}
            <span className="text-gold">ZeroHenriot</span>.{' '}
            {lang ? 'Why this' : 'Perchè questo'} nick?{' '}
            {lang ? "I don't know" : 'Non lo so'},{' '}
            {lang ? 'it just sounds good' : 'suona semplicemente bene'}.
          </Typography>
          <Typography className="text-xl mt-3">
            {lang
              ? "When I'm not tinkering with color codes, you'll find me immersing myself in virtual worlds, armed with a controller and ready to take on any  enemy (or save damsels in distress!)"
              : 'Quando non armeggio con i codici colorati, mi troverai ad immergermi in mondi virtuali, armato di controller e pronto ad affrontare qualsiasi nemico (o a salvare principesse in pericolo!)'}
            .
          </Typography>{' '}
          <Typography className="text-xl mt-3">
            {lang
              ? 'I also have a soft spot for cats - those little furry beings that seem to rule the world (spoiler, they do) - and I could spend hours watching funny cat videos online'
              : 'Ho anche un debole per i gatti - quei piccoli esseri pelosi che sembrano governare il mondo (spoiler, lo fanno) - e potrei passare ore a guardare video divertenti di gatti online'}
            .{' '}
          </Typography>
          <Typography className="text-xl mt-3">
            {lang
              ? 'Despite being a sports enthusiast, I must admit that my actual sports participation is limited to the occasional competition on the virtual field'
              : 'Pur essendo un appassionato di sport, devo ammettere che la mia effettiva partecipazione sportiva si limita alla competizione occasionale sul campo virtuale'}
            .
          </Typography>
          <Typography className="text-xl mt-3">
            {lang
              ? "Oh, and let's not forget that I'm a junior front-end developer on a mission to bring a touch of digital magic to the world. So get ready to explore my digital universe of code, cats, and pixel-perfect wonders"
              : 'Oh, e non dimentichiamo che sono uno sviluppatore front-end junior con la missione di portare un tocco di magia digitale nel mondo. Quindi preparati a esplorare il mio universo digitale fatto di codici, gatti e meraviglie pixel-perfect.'}
            ! 🎮😸💻
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default MyBiography
