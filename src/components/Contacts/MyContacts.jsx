import {
  Button,
  Card,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MyContacts = () => {
  const [animation, setAnimation] = useState(false)
  const lang = useSelector((state) => state.Language.lang)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY

      // Adjust this value as needed based on when you want the animations to start
      const triggerPosition = 2000 // For example, trigger the animations when the user scrolls down 300px

      if (scrollPosition > triggerPosition && !animation) {
        setAnimation(true)
      }
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [animation])

  const [emailContent, setEmailContent] = useState({
    name: '',
    surname: '',
    email: '',
    descriptionRole: '',
  })

  const formData = {
    name: emailContent.name,
    surname: emailContent.surname,
    email: emailContent.email,
    descriptionRole: emailContent.descriptionRole,
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Invia l'email

    emailjs
      .send('portfolio', 'email_portfolio', formData, {
        publicKey: 'AjxpFxrGclyzpn9af',
      })
      .then(
        () => {
          console.log('email send with success')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )

    // Resetta il contenuto del form
    setEmailContent({
      name: '',
      surname: '',
      email: '',
      descriptionRole: '',
    })
  }

  return (
    <div
      className={`container mx-auto py-20 px-5 lg:px-0 flex flex-col ${
        animation ? 'animate__animated animate__fadeInLeft' : 'hidden'
      }`}
      id="Contacts"
    >
      <Typography className="text-white text-4xl my-10">
        {' '}
        &#60; {lang ? 'Contact Me' : 'Contattami'}{' '}
        <span className="text-gold">/</span> &#62;{' '}
      </Typography>

      <Card color="transparent" className="text-xl text-white" shadow={false}>
        <Typography
          color="gray"
          className="mt-1 font-normal text-xl text-white"
        >
          {lang
            ? 'Need more information? Contact me and a cat will respond to you as soon as possible'
            : 'Hai bisogno di più informazioni? Contattami e un gatto ti risponderà il prima possibile'}{' '}
          !
        </Typography>
        <form className="mt-8 mb-2 w-full" onSubmit={handleFormSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-xl text-white"
            >
              {lang ? 'Your Name' : 'Il tuo nome'}
            </Typography>
            <Input
              required
              size="lg"
              label={lang ? 'Your name' : 'Il tuo nome'}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 text-xl text-white"
              value={emailContent.name}
              onChange={(e) => {
                setEmailContent({
                  ...emailContent,
                  name: e.target.value,
                })
              }}
              labelProps={{
                className: 'before:content-none after:content-none ps-3',
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-xl text-white"
            >
              {lang ? 'Your Email' : 'La tua Email'}
            </Typography>
            <Input
              required
              type="email"
              size="lg"
              label={lang ? 'Your email' : 'La tua Email'}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-xl text-white"
              value={emailContent.email}
              onChange={(e) => {
                setEmailContent({
                  ...emailContent,
                  email: e.target.value,
                })
              }}
              labelProps={{
                className: 'before:content-none after:content-none ps-3',
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-xl text-white"
            >
              {lang ? 'Message' : 'Messaggio'}
            </Typography>
            <Textarea
              required
              value={emailContent.descriptionRole}
              onChange={(e) => {
                setEmailContent({
                  ...emailContent,
                  descriptionRole: e.target.value,
                })
              }}
              label={lang ? 'Your message' : 'Il tuo messaggio'}
            />
          </div>
          <div className="flex items-center justify-between text-xl text-white mt-3">
            <Button type="submit" className="w-fit bg-gold text-lg">
              {lang ? 'Send' : 'Inoltra'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default MyContacts
