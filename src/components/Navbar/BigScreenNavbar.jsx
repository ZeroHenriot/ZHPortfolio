import { Link } from 'react-router-dom'

const BigScreenNavbar = () => {
  return (
    <>
      <div className="absolute rounded-b-lg bg-red-600 w-[110px] left-[5%] hidden lg:block shortcut animate__animated animate__fadeInDown">
        <Link to={''} className="flex justify-center">
          <p className="p-3">Home</p>
        </Link>
      </div>{' '}
      <div className="absolute rounded-b-lg bg-[#7c3aed] w-[110px] left-[10%] hidden lg:block shortcut animate__animated animate__fadeInDown">
        <Link to={'/About'} className="flex justify-center">
          <p className="p-3">Chi sono</p>
        </Link>
      </div>{' '}
      <div className="absolute rounded-b-lg bg-blue-600 w-[110px] left-[15%] hidden lg:block shortcut animate__animated animate__fadeInDown">
        <Link to={'/Projects'} className="flex justify-center">
          <p className="p-3">Progetti</p>
        </Link>
      </div>{' '}
      <div className="absolute rounded-b-lg bg-green-600 w-[110px] left-[20%] hidden lg:block shortcut animate__animated animate__fadeInDown">
        <Link to={'/Skills'} className="flex justify-center">
          <p className="p-3">Skills</p>
        </Link>
      </div>{' '}
      <div className="absolute rounded-b-lg bg-yellow-600 w-[110px] left-[25%] hidden lg:block shortcut animate__animated animate__fadeInDown">
        <Link to={'/Contacts'} className="flex justify-center">
          <p className="p-3">Contattami</p>
        </Link>
      </div>
    </>
  )
}

export default BigScreenNavbar
