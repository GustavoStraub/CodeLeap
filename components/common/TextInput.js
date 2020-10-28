import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: ${props => props.width};
height: ${props => props.height};
padding-left: 10px;
font-family: Roboto-Regular;
border-radius: 4px;
border: 1px solid;
font-size: 16px;
`

export default function TextInput(props) {
  return (
    <Input width={props.width}
      height={props.height}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.change} />
  )
}
