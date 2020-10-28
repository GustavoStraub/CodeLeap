import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
width: 100%;
background: #000;
height: 80px;
display:flex;
align-items: center;
justify-content: space-between;
padding: 0% 3%;
box-sizing: border-box;
h2{
  color: #fff;
}
`

export default function Header(props) {
  return (
    <MainWrapper>
      <h2>{props.title}</h2>
      {props.children}
    </MainWrapper>
  )
}
