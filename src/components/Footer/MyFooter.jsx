import { Typography } from '@material-tailwind/react'

const MyFooter = () => {
  return (
    <footer className="w-full bg-[#080215] p-8 mt-64">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  md:justify-between">
        <img src="src\assets\logo.png" alt="logo" className="w-10" />

        <Typography color="blue-gray" className="text-white font-normal">
          &copy; {new Date().getFullYear()} - Catalin Darii
        </Typography>
      </div>
    </footer>
  )
}

export default MyFooter
