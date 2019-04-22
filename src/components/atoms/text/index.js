import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Text = ({ children, white, subtitle, className, ...props }) => (
  <p
    className={classNames(
      styles.text,
      { [styles.textWhite]: white, [styles.subtitle]: subtitle },
      className
    )}
    {...props}
  >
    {children}
  </p>
)

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  white: PropTypes.bool,
  subtitle: PropTypes.bool,
}

Text.defaultProps = {
  white: false,
  subtitle: false,
  className: undefined,
}

export default Text
