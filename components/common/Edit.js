import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import Button from './Button'
import { getPost, EditPost } from '../../actions/functions'

const MainWrapper = styled.div`
background: rgba(119,119,119,0.8);
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

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    getPost(props.id)
      .then((res) => {
        setTitle(res.title)
        setContent(res.content)
      })
  }, [])

  function HandleEditSave(e) {
    e.preventDefault()
    EditPost(props.id, title, content)
      .then(props.event)
  }

  return (
    <MainWrapper>
      <PostEdit onSubmit={HandleEditSave}>
        <h2>Edit item</h2>
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
            mouse='pointer'
            bg='#000'
            title='SAVE' />
        </div>
      </PostEdit>
    </MainWrapper>
  )
}
