import React from 'react'

import { Container, Retweeted, RtIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RtIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Kayque Gonçalves</strong>
            <span>@Boua06</span>
            <Dot />
            <time>06 de Abirl</time>
          </Header>

          <Description>React Fullstack Twetter Clone</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              20
            </Status>
            <Status>
              <LikeIcon />
              235
            </Status>
          </Icons>

        </Content>
      </Body>

    </Container>
  )
}

export default Tweet
