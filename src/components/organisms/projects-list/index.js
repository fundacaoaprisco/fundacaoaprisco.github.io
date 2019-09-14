import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Card, SubtitleBar } from '@molecules'

import { Grid } from '@material-ui/core'

const ProjectsList = ({ projects }) => (
  <Fragment>
    <SubtitleBar text="Projetos em destaque" />
    <Grid container spacing={3}>
      {projects.map(project => (
        <Grid item xs={12} sm={6} md={3}>
          <Card content={project} />
        </Grid>
      ))}
    </Grid>
  </Fragment>
)

ProjectsList.propTypes = {
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

export default ProjectsList
