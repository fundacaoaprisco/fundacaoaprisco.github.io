import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import { PageTitle } from '@molecules'
import { ContactForm } from '@organisms'

const Contact = () => (
  <>
    <Helmet>
      <title>Fale conosco • Fundação Aprisco</title>
      <meta name="description" content="Fale conosco através do nosso formulário de contato" />
    </Helmet>

    <PageTitle title="Fale conosco" />
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1} md={2} />
      <Grid item xs={12} sm={10} md={8}>
        <ContactForm />
      </Grid>
    </Grid>
  </>
)

export default Contact
