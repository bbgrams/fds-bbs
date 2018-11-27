import React, { Component } from 'react'
import PostDetailView from '../components/PostDetailView'
import api from "../api";

export default class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      userId: null,
      loading : true
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
      userId,
      loading : false
    })
  }

  render() {
    const { onPostEdit, postId} = this.props
    const {userId, title, body, loading} = this.state
    return (
      <PostDetailView
        loading={loading}
        userId = {userId}
        onPostEdit={onPostEdit}
        postId={postId}
        title={title}
        body={body}
      />
    )
  }
}
