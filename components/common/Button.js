import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background: ${props => props.bg};
color: #fff;
border: none;
outline: none;
width: 111px;
cursor: ${props => props.mouse};
height: 33px;
margin-top: 15px;
`

export default function ButtonComponent(props) {
  return (
    <Button bg={props.bg} disabled={props.disable} mouse={props.mouse}>{props.title}</Button>
  )
}
