import { useEffect, useState } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react'

const MyNavbar = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 text-xl text-white hover:text-gold p-1 font-medium "
      >
        <a href="#About" className="flex items-center">
          {'Su di me'}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 text-xl text-white hover:text-gold p-1 font-medium "
      >
        <a href="#Projects" className="flex items-center">
          {'Progetti'}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 text-xl text-white hover:text-gold p-1 font-medium "
      >
        <a href="#Skills" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 text-xl text-white hover:text-gold p-1 font-medium "
      >
        <a href="#Contacts" className="flex items-center">
          {'Contatti'}
        </a>
      </Typography>
    </ul>
  )

  return (
    <>
      <Navbar className="px-4 py-2 lg:px-8 lg:py-4 max-w-full rounded-none backdrop-blur-sm bg-white/5 border-none rounded-b-lg fixed top-0 z-50">
        <div className="flex items-center text-blue-gray-900 justify-center ">
          <div className="hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </MobileNav>
      </Navbar>{' '}
    </>
  )
}

export default MyNavbar
