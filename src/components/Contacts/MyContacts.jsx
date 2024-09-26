import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import CustomAlert from '../Alert/Alert'

const MyContacts = () => {
  const [alert, setAlert] = useState(false)

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
      .send('portfolio', 'email_portfolio', formData, {
        publicKey: 'AjxpFxrGclyzpn9af',
      })
      .then(
        () => {
          console.log('email send with success')
          setAlert(true)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )

    setEmailContent({
      name: '',
      surname: '',
      email: '',
      descriptionRole: '',
    })
  }

  return (
    <div
      className={`container mx-auto py-20 px-5 lg:px-0 flex flex-col ${'animate__animated animate__fadeInLeft'}`}
      id="Contacts"
    >
      <Typography className="text-white text-4xl my-10">
        {' '}
        &#60; {'Contattami'} <span className="text-gold">/</span> &#62;{' '}
      </Typography>

      <Card color="transparent" className="text-xl text-white" shadow={false}>
        <Typography
          color="gray"
          className="mt-1 font-normal text-xl text-white"
        >
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
              className="-mb-3 text-xl text-white"
            >
              {'Il tuo nome'}
            </Typography>
            <Input
              required
              size="lg"
              label={'Il tuo nome'}
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
              {'La tua Email'}
            </Typography>
            <Input
              required
              type="email"
              size="lg"
              label={'La tua Email'}
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
              {'Messaggio'}
            </Typography>
            <Textarea
              className="text-white text-xl"
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
          {alert && <CustomAlert />}
          <div className="flex items-center justify-between text-xl text-white mt-3">
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
