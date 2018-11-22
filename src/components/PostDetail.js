import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';
 
 export default class PostDetail extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        title : '',
        body : ''
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
    const {data : {title, body}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body
    })
  }

   render() {
     const { postId, onPostEdit} = this.props
     const {title, body} = this.state
     
     return (
       <Layout>
         <h1>게시글</h1>
         <button onClick={() => onPostEdit(postId)}>수정하기</button>
         <h2>{title}</h2>
         <p>{body}</p>
       </Layout>
     )
   }
 }
 