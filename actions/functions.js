import axios from 'axios'

const api = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
})

export async function getPosts() {
  let Posts
  await api.get()
    .then(res => Posts = res.data.results)
    .catch(err => console.log(err))
  return Posts
}

export async function PostAPost(username, title, content, action) {
  await api.post(null, {
    username,
    title,
    content
  })
    .then(action)
    .catch(err => console.log(err))
}

export async function DeletePost(id, action) {
  await api.delete(`${id}/`)
    .then(action)
    .catch(err => console.log(err))
}

export async function EditPost(id, title, content) {
  await api.patch(`${id}/`, {
    title,
    content
  })
    .catch(err => console.log(err))
}

export async function getPost(id) {
  let Post
  await api.get(`${id}/`)
    .then(res => Post = res.data)
    .catch(err => console.log(err))
  return Post
}