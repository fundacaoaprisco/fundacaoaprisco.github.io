import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import { DocumentCard, PageTitle } from '@molecules'
import { docsToCard } from '@utils'

const Transparency = () => {
  const {
    allFile: { edges: allDocs },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)

  const allDocsTransformed = docsToCard({
    array: allDocs,
    buttonText: 'Ver documento',
  })

  return (
    <>
      <Helmet>
        <title>Transparência • Fundação Aprisco</title>
        <meta name="description" content="Todos os nossas informações abertas para o público." />
      </Helmet>

      <PageTitle title="Somos transparentes" />
      <Grid container spacing={3}>
        {allDocsTransformed.map(doc => (
          <Grid key={`doc-key-${doc.name}`} item xs={12} sm={6} md={3}>
            <DocumentCard content={doc} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Transparency
