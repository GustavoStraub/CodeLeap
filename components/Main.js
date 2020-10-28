import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import TextInput from '../components/common/TextInput'
import Button from '../components/common/Button'

const MainWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Container = styled.div`
width: 800px;
`
const InnerContainer = styled.div`
box-sizing: border-box;
padding: 20px;
background: #fff;
`
const PostMaker = styled.form`
border: 1px solid;
box-sizing: border-box;
padding: 20px;
display: flex;
flex-direction: column;
h2{
  margin-bottom: 3vh;
}
label{
  margin-bottom: 10px;
}
textarea{
  border: 1px solid;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 16px;
  font-family: Roboto-Regular;
  padding-top: 5px;
  resize: none;
  height: 7vh;
}
input{
  margin-bottom: 20px;
}
div{
  padding: 5px 0 0 0;
  display: flex;
  justify-content: flex-end;
}
`

export default function Main() {
  return (
    <MainWrapper>
      <Container>
        <Header />
        <InnerContainer>
          <PostMaker onSubmit={() => { }}>
            <h2>What's on your mind?</h2>
            <label>Title</label>
            <TextInput
              height='28px'
              type='text'
              placeholder='Hello world'
            />
            <label>Content</label>
            <textarea
              type='text'
              placeholder='Content here'
            />
            <div>
              <Button
                bg='#000'
                title='CREATE' />
            </div>
          </PostMaker>
        </InnerContainer>
      </Container>
    </MainWrapper>
  )
}
