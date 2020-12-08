import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import icon from '@images/icone-contribuir.png'

import {
  StyledContributeBar,
  StyledImage,
  StyledFlexGrid,
  StyledContributeText,
  StyledImpactText,
} from './styled'

import { Heading, Button } from '@atoms'

const ContributeBar = ({ number }) => (
  <StyledContributeBar>
    <StyledFlexGrid>
      <StyledImage src={icon} alt="Icone com duas mãos" />
      <Heading type="h2" white>
        {number}
      </Heading>
      <StyledImpactText white>
        Pessoas impactadadas todos os anos pela Fundação Aprisco
      </StyledImpactText>
    </StyledFlexGrid>
    <StyledFlexGrid>
      <StyledContributeText white>
        Ajude-nos a continuar <br />
        gerando impacto
      </StyledContributeText>
      <Button white onClick={() => navigate('/como-contribuir')}>
        Veja como contribuir
      </Button>
    </StyledFlexGrid>
  </StyledContributeBar>
)

ContributeBar.propTypes = {
  number: PropTypes.number.isRequired,
}

export default ContributeBar
