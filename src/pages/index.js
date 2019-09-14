import React from 'react'

import { Container } from '@atoms'

import { Jumbotron } from '@molecules'

import { Navbar, FeaturedProjectsList } from '@organisms'

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
    title: 'Infocentro2',
    text:
      'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
    image: 'https://picsum.photos/350/300',
    href: '/',
    button: 'Leia mais',
  },
  {
    title: 'Infocentro3',
    text:
      'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
    image: 'https://picsum.photos/350/300',
    href: '/',
    button: 'Leia mais',
  },
  {
    title: 'Infocentro4',
    text:
      'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
    image: 'https://picsum.photos/350/300',
    href: '/',
    button: 'Leia mais',
  },
]

const Index = () => (
  <Container>
    <Navbar />
    <Jumbotron />
    <FeaturedProjectsList projects={PROJECTS} />
  </Container>
)

export default Index
