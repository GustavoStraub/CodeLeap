import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
width: 100%;
background: #000;
height: 80px;
display:flex;
align-items: center;
h2{
  color: #fff;
  padding-left: 3%;
}
`

export default function Header() {
  return (
    <MainWrapper>
      <h2>CodeLeap Network</h2>
    </MainWrapper>
  )
}
