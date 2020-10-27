import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const MainWrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
const LoginWrapper = styled.div`
height: 240px;
width: 500px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
background: #FFFFFF;
border: 1px solid #CCCCCC;
box-sizing: border-box;
h2{
  margin-bottom: 10px;
}
p{
  margin: 20px 0;
}
form{
  display: flex;
  flex-direction: column;
  jutify-content: center;
  align-items: flex-end;
}
input{
  width: 444px;
  height: 28px;
  padding-left: 10px;
  font-family: Roboto-Regular;
  border-radius: 4px;
  border: 1px solid;
  font-size: 16px;
}
`
const Button = styled.button`
background: #000;
color: #fff;
border: none;
outline: none;
width: 111px;
cursor: ${props => props.mouse};
height: 33px;
margin-top: 15px;
`

export default function Login() {

  const router = useRouter()

  const [username, setUsername] = useState('')
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    username == '' ? setDisable(true) : setDisable(false)
  }, [username])
  console.log(disable)

  const HandleSubmit = (e) => {
    e.preventDefault()
    router.push('/mainScreen')

  }


  return (
    <MainWrapper>
      <LoginWrapper>
        <h2>Welcome to CodeLeap network!</h2>
        <p>Please enter your username</p>
        <form onSubmit={HandleSubmit}>
          <input type='text' placeholder='John doe' onChange={(e) => setUsername(e.target.value)} />
          <Button disabled={disable} mouse={disable ? 'not-allowed' : 'pointer'}>ENTER</Button>
        </form>
      </LoginWrapper>
    </MainWrapper>
  )
}
