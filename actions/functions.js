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

export async function PostAPost(username, title, content) {
  await api.post(null, {
    username: username,
    title: title,
    content: content
  })
    .catch(err => console.log(err))
}