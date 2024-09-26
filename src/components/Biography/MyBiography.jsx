import { Typography } from '@material-tailwind/react'
import './MyBiography.css'
import Robot from '../Robot/Robot'

const MyBiography = () => {
  return (
    <>
      <div
        className=" flex flex-col justify-center px-5 py-20 animate__animated animate__fadeInLeft"
        id="About"
      >
        <Typography className="text-white text-4xl my-10">
          {' '}
          &#60; {'Chi sono? '}
          <span className="text-gold">/</span> &#62;{' '}
        </Typography>

        <div
          className={`${'typewriter-it'} w-fit text-white grid gap-4 lg:grid-cols-2 lg:mx-0`}
        >
          <div>
            <Typography className={`${'line-it anim-typewriter-it'} text-7xl`}>
              {'Ciao'} !
            </Typography>
            <Typography className="text-xl mt-3">
              Immagina di essere un bambino con gli occhi pieni di stelle,
              sognando di diventare un astronauta e di esplorare l'universo.
              Bene, mentre alcuni sognano di viaggiare nello spazio, io ho
              sempre sognato di viaggiare nel mondo del codice e della
              tecnologia. Da quel primo giorno, ho saputo che la mia avventura
              sarebbe stata nel fantastico universo del front-end development.
            </Typography>
            <Typography className="text-xl mt-3">
              Sono <span className="text-gold">Catalin</span>, un front-end
              developer junior con una passione per il design che fa brillare
              gli occhi e per il codice che dà vita alle idee. Ogni riga di
              codice che scrivo è come una piccola esplorazione, un passo verso
              la creazione di qualcosa di straordinario e innovativo.
            </Typography>{' '}
            <Typography className="text-xl mt-3">
              Nel mio portfolio, troverai non solo progetti tecnicamente
              impeccabili, ma anche un pizzico di magia digitale e un sacco di
              creatività. Dal design pixel-perfect all'implementazione di
              soluzioni innovative, il mio obiettivo è sempre quello di
              trasformare visioni in realtà e di farlo con un sorriso.
            </Typography>
            <Typography className="text-xl mt-3">
              Se anche tu sogni di portare il tuo progetto alla luce della
              ribalta, o se stai cercando un collaboratore appassionato e
              creativo, allora sei nel posto giusto. Esplora il mio lavoro e
              vediamo insieme come possiamo trasformare le tue idee in una
              realtà vibrante e coinvolgente.
            </Typography>
            <Typography className="text-xl mt-3">
              Pronto per un'avventura digitale? 🚀✨
            </Typography>
          </div>
        </div>
        {/* <div style={{ position: 'absolute', width: '100%' }}>
          <Robot />
        </div> */}
      </div>
    </>
  )
}
export default MyBiography
