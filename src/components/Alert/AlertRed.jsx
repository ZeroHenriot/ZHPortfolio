import { Alert } from '@material-tailwind/react'

function Icon() {
  return (
    <>
      <svg viewBox="0 0 24 24" fill="transparent" className="h-6 w-6">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </>
  )
}

const AlertRed = () => {
  return (
    <Alert
      icon={<Icon />}
      className="rounded-none border-l-4 border-[#ff0000] bg-[#ff0000]/10 font-medium text-[#ff0000]"
    >
      Si è verificato un problema, riprova più tardi
    </Alert>
  )
}

export default AlertRed
