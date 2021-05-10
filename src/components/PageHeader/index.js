import React from 'react'
import { Container, H1, H3 } from './styles'
export const PageHeader = ({ title = '', subtitle = '' }) => {
  return (
    <Container>
      <H1>{title}</H1>
      <H3>{subtitle}</H3>
    </Container>
  )
}
