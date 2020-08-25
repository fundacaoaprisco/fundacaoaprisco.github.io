import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Card, SubtitleBar } from '@molecules'

const CardGrid = ({ cards, title, button, columns }) => {
  const gridProps =
    columns === 3
      ? {
          xs: 12,
          sm: 4,
          md: 4,
        }
      : {
          xs: 12,
          sm: 6,
          md: 3,
        }
  return (
    <Fragment>
      <SubtitleBar text={title} button={button} />
      <Grid container spacing={3}>
        {cards.map(project => (
          <Grid key={`project-list-key-${project.id}`} item {...gridProps}>
            <Card content={project} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  )
}

CardGrid.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
      href: PropTypes.string,
      button: PropTypes.string,
    })
  ).isRequired,
  columns: PropTypes.oneOf([3, 4]),
}

CardGrid.defaultProps = {
  columns: 3,
  button: undefined,
}

export default CardGrid
