import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Card, SubtitleBar } from '@molecules'

const ProjectsList = ({ projects }) => {
  const renderProjectsList = () => projects.map(project => <Card content={project} />)
  return (
    <Fragment>
      <SubtitleBar text="Projetos em destaque" />
      {renderProjectsList()}
    </Fragment>
  )
}

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
