import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';
import { UserConsumer } from '../contexts/UserContext';
 
 export default class PostDetail extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        title : '',
        body : '',
        userId : null
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
    const {data : {title, body, userId}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body,
      userId
    })
  }

   render() {
     const { postId, onPostEdit} = this.props
     const {title, body} = this.state
     
     return (
       <Layout title="게시물 내용">
         <h1>게시글</h1>
         <UserConsumer>
           {({id}) => {
             if(this.state.userId === id){
               return  <button onClick={() => onPostEdit(postId)}>수정하기</button>
             }
           }}
         </UserConsumer>
         <h2>{title}</h2>
         <p>{body}</p>
       </Layout>
     )
   }
 }
 