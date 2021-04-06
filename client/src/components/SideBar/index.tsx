/* eslint-disable react/jsx-key */
import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSugestion from '../FollowSugestion'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

    <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSugestion name="Tom Misch" nickname="@TomMisch" />,
            <FollowSugestion name="Jordan Rakei" nickname="@JordanRakei"/>,
            <FollowSugestion name="Barack Obama" nickname="@Obama"/>
          ]}
        />
      </Body>
    </StickyBox>

    </Container>
  )
}

export default SideBar
