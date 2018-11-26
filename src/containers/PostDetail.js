import React, { Component } from 'react'
import PostDetailView from '../components/PostDetailView'
import api from "../api";

export default class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      userId: null
    }
  }

  async componentDidMount() {
    // const {postId} = this.props
    // const res = await api.get('/posts/' + postId)
    // console.log(res.data)
    // this.setState({
    //   title : res.data.title,
    //   body : res.data.body
    // })
    const { data: { title, body, userId } } = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body,
      userId
    })
  }

  render() {
    const { onPostEdit, postId} = this.props
    const {userId, title, body} = this.state
    return (
      <PostDetailView
        userId = {userId}
        onPostEdit={onPostEdit}
        postId={postId}
        title={title}
        body={body}
      />
    )
  }
}
