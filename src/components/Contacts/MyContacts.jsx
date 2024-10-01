import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

import AlertGreen from '../Alert/AlertGreen'
import AlertRed from '../Alert/AlertRed' // Importa il tuo AlertRed

const MyContacts = () => {
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [alertError, setAlertError] = useState(false) // Stato per l'alert di errore

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

    emailjs
      .send('portfolio1', 'email_portfolio', formData, {
        publicKey: 'TMICBwT9mP1ugmxF9',
      })
      .then(
        () => {
          console.log('email send with success')
          setAlertSuccess(true)
          setAlertError(false) // Resetta l'alert di errore
        },
        (error) => {
          console.log('FAILED...', error.text)
          setAlertError(true) // Mostra l'alert di errore
          setAlertSuccess(false) // Resetta l'alert di successo
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
      className="px-6 md:px-24 py-16 flex flex-col md:justify-center h-full animate__animated animate__fadeInLeft"
      id="Contacts"
    >
      <Typography className=" text-4xl my-10">Contattami</Typography>

      <Card color="transparent" className="text-xl " shadow={false}>
        <Typography color="gray" className="mt-1 font-normal text-xl ">
          {
            'Hai bisogno di più informazioni? Contattami e partiamo insieme per la nostra avventura'
          }{' '}
          !
        </Typography>
        <form className="mt-8 mb-2 w-full" onSubmit={handleFormSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-xl "
            >
              {'Il tuo nome'}
            </Typography>
            <Input
              required
              size="lg"
              label={'Il tuo nome'}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 text-xl "
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
              className="-mb-3 text-xl "
            >
              {'La tua Email'}
            </Typography>
            <Input
              required
              type="email"
              size="lg"
              label={'La tua Email'}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-xl "
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
              className="-mb-3 text-xl "
            >
              {'Messaggio'}
            </Typography>
            <Textarea
              className=" text-xl"
              required
              value={emailContent.descriptionRole}
              onChange={(e) => {
                setEmailContent({
                  ...emailContent,
                  descriptionRole: e.target.value,
                })
              }}
              label={'Il tuo messaggio'}
            />
          </div>
          {alertSuccess && <AlertGreen />}
          {alertError && <AlertRed />}
          <div className="flex items-center justify-between text-xl mt-3">
            <Button
              type="submit"
              className="w-fit bg-gold hover:bg-darkgold duration-700 text-lg"
            >
              {'Inoltra'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default MyContacts
