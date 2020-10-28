import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
background: rgba(119,119,119,0.1);
height: 100vh;
width: 100%;
position: fixed;
display: flex;
top: 0;
left:0;
justify-content: center;
align-items: center;
`
const PopUp = styled.div`
height: 18%;
box-sizing: border-box;
padding: 30px;
background: #fff;
border: 1px solid;
width: 600px;
display: flex;
flex-direction: column;
justify-content: space-around;
h4{
  font-size: 22px;
}
div{
  display: flex;
  justify-content: flex-end;
  button{
    width: 111px;
    height: 33px;
    :first-child{
      margin-right: 10px;
    }
  }
}
`
export default function DeletePopup(props) {
  return (
    <MainWrapper>
      <PopUp>
        <h4>Are you sure you want to delete this item?</h4>
        <div>
          <button onClick={props.cancel}>Cancel</button>
          <button onClick={props.ok}>OK</button>
        </div>
      </PopUp>
    </MainWrapper>
  )
}
