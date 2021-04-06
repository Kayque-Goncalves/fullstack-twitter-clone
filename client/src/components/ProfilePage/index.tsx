import React from 'react'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1> Kayque Gonçalves </h1>
        <h2> @Boua06 </h2>

        <p>
          React Fullstack developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 31 de outubro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>236</strong>
          </span>
          <span>
            <strong>30 </strong> seguidores
          </span>
        </Followage>

      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
