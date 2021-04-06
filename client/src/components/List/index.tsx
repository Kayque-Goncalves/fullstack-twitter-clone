import React from 'react'

import { Container, Item, Title } from './styles'

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }: Props) => {
  return (
    <Container>
      <Item>
        <Title>{ title }</Title>
      </Item>
      {elements.map((element) => (
        <Item key="">{ element }</Item>
      ))}
    </Container>
  )
}

export default List
