import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Button from './common/Button'
import TextInput from './common/TextInput'
import { UserContext } from '../actions/Store'

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
`

export default function Login() {

  const router = useRouter()

  const [user, setUser] = useContext(UserContext)
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    user == '' ? setDisable(true) : setDisable(false)
  }, [user])

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
          <TextInput
            value={user}
            height='28px'
            width='444px'
            type='text'
            placeholder='John doe'
            change={(e) => setUser(e.target.value)} />
          <Button
            bg={disable ? '#CECECE' : '#000'}
            disable={disable}
            mouse={disable ? 'not-allowed' : 'pointer'}
            title='ENTER' />
        </form>
      </LoginWrapper>
    </MainWrapper>
  )
}
