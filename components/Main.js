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

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [disable, setDisable] = useState(true)


  useEffect(() => {
    title == '' ? setDisable(true) : setDisable(false)
    content == '' ? setDisable(true) : setDisable(false)
  }, [title, content])

  const HandleCreatePost = (e) => {
    e.preventDefault()
    alert('OPA')
  }


  return (
    <MainWrapper>
      <Container>
        <Header title='CodeLeap Network' />
        <InnerContainer>
          <PostMaker onSubmit={HandleCreatePost}>
            <h2>What's on your mind?</h2>
            <label>Title</label>
            <TextInput
              value={title}
              height='28px'
              type='text'
              placeholder='Hello world'
              change={(e) => setTitle(e.target.value)}
            />
            <label>Content</label>
            <textarea
              value={content}
              type='text'
              placeholder='Content here'
              onChange={(e) => setContent(e.target.value)}
            />
            <div>
              <Button
                bg={disable ? '#CECECE' : '#000'}
                disable={disable}
                mouse={disable ? 'not-allowed' : 'pointer'}
                title='CREATE' />
            </div>
          </PostMaker>
        </InnerContainer>
      </Container>
    </MainWrapper>
  )
}
