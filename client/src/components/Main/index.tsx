import React from 'react'

import ProfilePage from '../ProfilePage'
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles'

export const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

      <ProfileInfo>
        <strong>Kayque Gonçalves</strong>
        <span>623 Tweets</span>
      </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
          <HomeIcon />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main
