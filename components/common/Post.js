import React, { useContext } from 'react'
import styled from 'styled-components'
import Header from './Header'
import { UserContext } from '../../actions/Store'

const Wrapper = styled.div`
border: 1px solid;
display: flex;
flex-direction: column;
margin-bottom: 5vh;
`
const InnerWrapper = styled.div`
padding: 25px;
box-sizing: border-box;
`
const Info = styled.div`
display: flex;
justify-content: space-between;
color: #777777;
`
const Content = styled.div`
margin-top: 20px;
`
const Actions = styled.div`
display: flex;
justify-content: space-around;
width: 13%;
img{
  width: 20px;
  cursor: pointer;
}
`

export default function Post(props) {
  const [user, setUser] = useContext(UserContext)

  return (
    <Wrapper>
      <Header title={props.title}>
        {user == props.user ?
          <Actions>
            <img onClick={props.clickDelete} src='./img/delete.png' />
            <img onClick={props.clickEdit} src='./img/edit.png' />
          </Actions>
          :
          null}
      </Header>
      <InnerWrapper>
        <Info>
          <p>@{props.user}</p>
          <p>{props.date}</p>
        </Info>
        <Content>
          {props.content}
        </Content>
      </InnerWrapper>
    </Wrapper>
  )
}
