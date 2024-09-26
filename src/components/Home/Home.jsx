import { Link } from 'react-router-dom'
import avatar from '../../../public/assets/file2.png'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

const Home = () => {
  return (
    <div className="relative h-full w-full flex">
      <img
        src={avatar}
        alt=""
        className="absolute h-full left-1/4 z-50  animate__animated animate__fadeIn"
      />
      <h1 className="text-10xl text-gold absolute top-1/3 left-1/16 leading-11  animate__animated animate__fadeInLeft">
        <strong>
          {' '}
          <span className="block">Catalin</span>{' '}
          <span className="ms-24">Darii</span>
        </strong>
      </h1>

      <Card className="absolute top-1/3 right-1/10 max-w-99 bg-transparent text-white animate__animated animate__fadeInRight">
        <CardBody>
          <Typography variant="h2" className="text-gold text-4xl">
            FrontEnd Developer
          </Typography>
          <Typography className="text-2xl">
            Immagina di essere un bambino con gli occhi pieni di stelle,
            sognando di esplorare l'universo. Io ho sempre sognato di viaggiare
            nel mondo del codice e della tecnologia. Sono Catalin, un front-end
            developer junior appassionato di design e innovazione. Ogni progetto
            è per me un'opportunità di trasformare visioni in realtà. Pronto per
            un'avventura digitale insieme?
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 text-2xl ">
          <Link to={'/About'} className="hover:text-darkgold">
            Leggi di più
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home
