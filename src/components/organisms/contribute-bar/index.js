import React from 'react'
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

const ContributeBar = () => (
  <StyledContributeBar>
    <StyledFlexGrid>
      <StyledImage src={icon} alt="Icone com duas mãos" />
      <Heading type="h2" white>
        4.057
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
      <Button white onClick={() => navigate('/blog/como-contribuir', { replace: true })}>
        Veja como contribuir
      </Button>
    </StyledFlexGrid>
  </StyledContributeBar>
)

export default ContributeBar
