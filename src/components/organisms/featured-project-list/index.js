import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Card, SubtitleBar } from '@molecules'

import { Grid } from '@material-ui/core'

const FeaturedProjectsList = ({ projects }) => (
  <Fragment>
    <SubtitleBar text="Projetos em destaque" />
    <Grid container spacing={3}>
      {projects.map(project => (
        <Grid key={`project-list-key-${project.title}`} item xs={12} sm={4} md={4}>
          <Card content={project} />
        </Grid>
      ))}
    </Grid>
  </Fragment>
)

FeaturedProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
      href: PropTypes.string,
      button: PropTypes.string,
    })
  ).isRequired,
}

export default FeaturedProjectsList
