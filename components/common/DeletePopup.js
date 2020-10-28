import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
background: rgba(119,119,119,0.8);
height: 100vh;
width: 100%;
position: fixed;
display: ${props => props.show}
`
const PopUp = styled.div`
box-sizing: border-box;
padding: 20px;
`
export default function DeletePopup(props) {
  return (
    <MainWrapper show={props.show}>
      <PopUp>
        <h3>Are you sure you want to delete this item?</h3>
      </PopUp>
    </MainWrapper>
  )
}
