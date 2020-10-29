import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import TextInput from '../components/common/TextInput'
import Button from '../components/common/Button'
import Post from '../components/common/Post'
import { UserContext } from '../actions/Store'
import { getPosts, PostAPost, DeletePost, EditPost } from '../actions/functions'
import DeletePopup from './common/DeletePopup'
import Edit from './common/Edit'

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
margin-bottom: 5vh;
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
  const [ID, setID] = useState()
  const [user, setUser] = useContext(UserContext)
  const [disable, setDisable] = useState(true)
  const [reload, setReload] = useState(true)
  const [posts, setPosts] = useState([])
  const [PopupDelete, setPopupDelete] = useState(false)
  const [PopupEdit, setPopupEdit] = useState(false)


  useEffect(() => {
    title.length > 0 && content.length > 0 ? setDisable(false) : setDisable(true)
  }, [title, content])

  useEffect(() => {
    getPosts().then(res => setPosts(res))
  }, [reload])

  function Reset() {
    setTitle('')
    setContent('')
  }

  const HandleCreatePost = (e) => {
    e.preventDefault()
    PostAPost(user, title, content, setReload(!reload))
    Reset()
  }

  const OpenDeletePop = (id) => {
    setPopupDelete(!PopupDelete)
    setID(id)
  }

  const HandleCancel = () => {
    setPopupDelete(false)
  }

  const HandleDeletePost = () => {
    DeletePost(ID, setReload(!reload))
      .then(setPopupDelete(!PopupDelete))
      .catch(err => console.log(err))
  }

  const HandleEdit = (id) => {
    setID(id)
    setPopupEdit(!PopupEdit)
  }

  const SaveEdit = () => {
    setPopupEdit(false)
    setReload(!reload)
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

          {PopupDelete ? <DeletePopup cancel={HandleCancel}
            ok={HandleDeletePost} />
            : null}

          {PopupEdit ? <Edit event={SaveEdit} id={ID} />
            : null}

          {posts.map(post =>
            <>
              <Post key={post.id}
                title={post.title}
                user={post.username}
                date={post.created_datetime}
                content={post.content}
                clickDelete={() => OpenDeletePop(post.id)}
                clickEdit={() => HandleEdit(post.id)} />
            </>
          )}
        </InnerContainer>
      </Container>
    </MainWrapper>
  )
}
