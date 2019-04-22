import React from 'react'

import { Container } from '@atoms'

import { Jumbotron } from '@molecules'

import { Navbar, ProjectsList } from '@organisms'

// import styles from './styles.module.css'

const PROJECTS = [
  {
    title: 'Infocentro',
    text:
      'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
    image: 'https://picsum.photos/350/300',
    href: '/',
    button: 'Leia mais',
  },
  {
    title: 'Infocentro',
    text:
      'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
    image: 'https://picsum.photos/350/300',
    href: '/',
    button: 'Leia mais',
  },
  {
    title: 'Infocentro',
    text:
      'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
    image: 'https://picsum.photos/350/300',
    href: '/',
    button: 'Leia mais',
  },
]

export default () => (
  <Container>
    <Navbar />
    <Jumbotron />
    <ProjectsList projects={PROJECTS} />
  </Container>
)
