import React from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import Button from './Button'

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

const PostEdit = styled.form`
border: 1px solid;
box-sizing: border-box;
padding: 20px;
display: flex;
width: 600px;
flex-direction: column;
margin-bottom: 5vh;
background: #fff;
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
export default function Edit(props) {
  return (
    <MainWrapper>
      <PostEdit onSubmit={props.submit}>
        <h2>What's on your mind?</h2>
        <label>Title</label>
        <TextInput
          value={props.title}
          height='28px'
          type='text'
          placeholder='Hello world'
          change={props.titleChange}
        />
        <label>Content</label>
        <textarea
          value={props.content}
          type='text'
          placeholder='Content here'
          onChange={props.contentChange}
        />
        <div>
          <Button
            bg={props.disable ? '#CECECE' : '#000'}
            disable={props.disable}
            mouse={props.disable ? 'not-allowed' : 'pointer'}
            title='SAVE' />
        </div>
      </PostEdit>
    </MainWrapper>
  )
}
