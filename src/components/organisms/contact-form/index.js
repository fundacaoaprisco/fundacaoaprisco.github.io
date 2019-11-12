import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import { Label, StyledField, Form, ErrorText, SubmitButton } from './styled'

const formValidation = yup.object().shape({
  name: yup.string().required('Seu nome não pode ficar em branco'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Seu e-mail é obrigatório'),
  message: yup.string().required('A mensagem não pode ficar em branco'),
})

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const ContactForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={formValidation}
    onSubmit={(values, actions) => {
      const { setSubmitting, resetForm } = actions
      setSubmitting(true)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => {
          resetForm()
          console.log('enviado!')
        })
        .catch(error => alert(error))
    }}
  >
    {({ errors, touched, setFieldTouched, setFieldValue, handleSubmit }) => (
      <Form onSubmit={handleSubmit} name="contact" data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="name">Nome</Label>
        <StyledField
          name="name"
          className="form-input"
          placeholder="Nome"
          error={!!(errors.name && touched.name)}
        />
        {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}

        <Label htmlFor="email">E-mail</Label>
        <StyledField
          name="email"
          className="form-input"
          placeholder="E-mail"
          error={!!(errors.email && touched.email)}
        />
        {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}

        <Label htmlFor="message">Mensagem</Label>
        <StyledField
          as="textarea"
          name="message"
          className="form-input"
          placeholder="Digite sua mensagem aqui"
          onChange={e => setFieldValue('message', e.target.value)}
          onBlur={() => setFieldTouched('message', true)}
          rows="3"
          textarea
          error={!!(errors.message && touched.message)}
        />
        {errors.message && touched.message && <ErrorText>{errors.message}</ErrorText>}
        <div data-netlify-recaptcha="true" />
        <SubmitButton type="submit">Enviar mensagem</SubmitButton>
      </Form>
    )}
  </Formik>
)

export default ContactForm
