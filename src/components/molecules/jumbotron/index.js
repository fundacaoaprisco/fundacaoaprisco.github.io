import React from 'react'

import { Heading, Text, Button } from '@atoms'

import styles from './styles.module.css'

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <Heading type="h1">
      Comunidade que se
      <br /> propõe a fazer o bem.
    </Heading>
    <Text className={styles.jumbotronText} white>
      Promovemos projetos sociais voltados à educação,
      <br /> cultura, inclusão social e geração de renda.
    </Text>
    <Button white>Veja nossos projetos</Button>
  </div>
)

export default Jumbotron
