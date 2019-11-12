import React from 'react'
import { Grid } from '@material-ui/core'

import { PageTitle } from '@molecules'
import { ContactForm } from '@organisms'

const Contact = () => (
  <>
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
