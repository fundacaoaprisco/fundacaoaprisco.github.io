import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Heading = ({ type, children, white, className, ...props }) => {
  let heading
  switch (type) {
    case 'h1':
      heading = (
        <h1
          className={classNames(
            styles.heading,
            styles.h1,
            { [styles.headingWhite]: white },
            className
          )}
          {...props}
        >
          {children}
        </h1>
      )
      break
    case 'h2':
      heading = (
        <h2
          className={classNames(
            styles.heading,
            styles.h2,
            { [styles.headingWhite]: white },
            className
          )}
          {...props}
        >
          {children}
        </h2>
      )
      break
    case 'h3':
      heading = (
        <h3
          className={classNames(
            styles.heading,
            styles.h3,
            { [styles.headingWhite]: white },
            className
          )}
          {...props}
        >
          {children}
        </h3>
      )
      break
    case 'h4':
      heading = (
        <h4
          className={classNames(styles.heading, styles.h4, { [styles.headingWhite]: white })}
          {...props}
        >
          {children}
        </h4>
      )
      break
    default:
      heading = null
      break
  }
  return heading
}

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  white: PropTypes.bool,
}

Heading.defaultProps = {
  type: 'h2',
  white: false,
  className: undefined,
}

export default Heading
