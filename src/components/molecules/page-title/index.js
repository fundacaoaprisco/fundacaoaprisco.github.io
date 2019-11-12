import React from 'react'
import PropTypes from 'prop-types'

import { PageTitleWrapper } from './styled'

import { Heading } from '@atoms'

const PageTitle = ({ title }) => (
  <PageTitleWrapper>
    <Heading type="h1">{title}</Heading>
    <svg width="310" height="2" viewBox="0 0 310 2" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M310 1.5H0V0.5H310V1.5Z"
        fill="url(#paint0_radial)"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(155 0.998905) rotate(-139.589) scale(163.512 69424.1)"
        >
          <stop stopColor="#0D9999" />
          <stop offset="1" stopColor="#0D9999" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </PageTitleWrapper>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

PageTitle.defaultProps = {}

export default PageTitle
