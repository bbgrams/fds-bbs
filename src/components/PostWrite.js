import React, { Component } from 'react'
import api from '../api';
import PostForm from './PostForm'


export default class PostWrite extends Component {
  async handleSubmit(e){
    e.preventDefault()
    const title = e.target.elements.title.value
    const body = e.target.elements.body.value
    const res = await api.post('/posts',{ // 자료를 생성하면 id가 들어있는 그 자료를 우리에게 반환해준다.
      title,
      body
    })
    // 생성된 게시물 보여주기
    this.props.onPostDetail(res.data.id); // res.data에 새로 생성된 게시글의 정보가 들어있다.

  }

  render() {
    return (
      <PostForm onSubmit = {e => this.handleSubmit(e)} />
    )
  }
}


// 중복되는 render 부분은 따로 컴포넌트로 빼서 관리하자.