import React from 'react'
import PropTypes from 'prop-types'

import { StyledCard, IconWrapper, CardTitle } from './styled'

import { Text } from '@atoms'

const DocumentCard = ({ content, ...props }) => {
  const { title, href, button } = content
  return (
    <StyledCard {...props}>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <IconWrapper>
          <svg
            width="36"
            height="48"
            viewBox="0 0 36 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0531 24.0094C16.5844 22.5094 16.5938 19.6125 16.8656 19.6125C17.6531 19.6125 17.5781 23.0719 17.0531 24.0094ZM16.8937 28.4344C16.1719 30.3281 15.2719 32.4938 14.2313 34.3125C15.9469 33.6562 17.8875 32.7 20.1281 32.2594C18.9375 31.3594 17.7937 30.0656 16.8937 28.4344ZM8.07187 40.1344C8.07187 40.2094 9.30937 39.6281 11.3438 36.3656C10.7156 36.9562 8.61562 38.6625 8.07187 40.1344ZM23.25 15H36V45.75C36 46.9969 34.9969 48 33.75 48H2.25C1.00312 48 0 46.9969 0 45.75V2.25C0 1.00312 1.00312 0 2.25 0H21V12.75C21 13.9875 22.0125 15 23.25 15ZM22.5 31.1062C20.625 29.9625 19.3781 28.3875 18.4969 26.0625C18.9188 24.3281 19.5844 21.6938 19.0781 20.0438C18.6375 17.2875 15.1031 17.5594 14.5969 19.4062C14.1281 21.1219 14.5594 23.5406 15.3563 26.625C14.2688 29.2125 12.6656 32.6812 11.5312 34.6687C11.5219 34.6687 11.5219 34.6781 11.5125 34.6781C8.97188 35.9813 4.6125 38.85 6.40313 41.0531C6.92813 41.7 7.90313 41.9906 8.41875 41.9906C10.0969 41.9906 11.7656 40.3031 14.1469 36.1969C16.5656 35.4 19.2188 34.4062 21.5531 34.0219C23.5875 35.1281 25.9688 35.85 27.5531 35.85C30.2906 35.85 30.4781 32.85 29.4 31.7812C28.0969 30.5063 24.3094 30.8719 22.5 31.1062ZM35.3438 9.84375L26.1562 0.65625C25.7344 0.234375 25.1625 0 24.5625 0H24V12H36V11.4281C36 10.8375 35.7656 10.2656 35.3438 9.84375ZM28.3969 33.7781C28.7812 33.525 28.1625 32.6625 24.3844 32.9344C27.8625 34.4156 28.3969 33.7781 28.3969 33.7781Z"
              fill="#C4C4C4"
            />
          </svg>
        </IconWrapper>
        <CardTitle type="h2">{title}</CardTitle>
        <Text>{button}</Text>
      </a>
    </StyledCard>
  )
}

DocumentCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
}

export default DocumentCard
