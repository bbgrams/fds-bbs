import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import RegisterForm from "./components/RegisterForm";
import PostList from './components/PostList'
import PostDetail from './components/PostDetail';
import PostWrite from './components/PostWrite';
import PostEdit from './components/PostEdit';
import {UserProvider} from './contexts/UserContext';

// ** 코드 작성 순서 **
// 1. 화면그리는코드 
// 2. 상태설계 
// 3. 상태로부터 화면그리기 
// 4. 상호작용이 일어났을때 상태변경하기

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // page === 'login' -> 로그인 페이지
      // page === 'register' -> 회원가입 페이지
      // page === 'post-list' -> 게시물 목록 페이지
      // page === 'post-detail' -> 게시물 내용 페이지
      // page === 'post-write' -> 게시물 등록 페이지
      // page === 'post-edit' -> 게시물 수정 페이지
      page: 'post-list',
      // 현재 보고있는 게시물의 ID
      postId : null
    }
  }

  handleLoginFormPage(){ // 로그인 폼으로 전환하는 함수 
    this.setState({
      page : 'login'
    })
  }

  handlePostListPage() {
    this.setState({
      page : 'post-list'
    })
  }

  handleRegisterPage(){
    this.setState({
      page: 'register'
    })
  }
  handlePostDetailPage(postId) {
    this.setState({
      page : 'post-detail',
      postId
    })
  }
  handlePostWritePage() {
    this.setState({
      page : 'post-write'
    })
  }
  handlePostEditPage(postId) {
    this.setState({
      page : 'post-edit',
      postId
    })
  }

  render() {
    return (
      <UserProvider onPostListPage={() => this.handlePostListPage()}>
        <div className="App">
          {this.state.page === 'login' ? (
            <LoginForm onRegister={() => this.handleRegisterPage()}/>
          ) : this.state.page ==='register' ? (
            <RegisterForm />
          ) : this.state.page === 'post-list' ? (
            <PostList 
              onLoginFormPage = {() => this.handleLoginFormPage()}
              onPostDetail={postId => this.handlePostDetailPage(postId)}
              onPostWrite={() => this.handlePostWritePage()}
            /> // 매개변수를 받아준다.
          ) : this.state.page === 'post-detail' ? (
            <PostDetail postId={this.state.postId} onPostEdit={postId => this.handlePostEditPage(postId)} />
          ) : this.state.page === 'post-write' ? (
            <PostWrite onPostDetail = {postId => this.handlePostDetailPage(postId)} />
          ) : this.state.page === 'post-edit' ? (
            <PostEdit postId={this.state.postId} onPostDetail ={postId =>this.handlePostDetailPage(postId)} />
          ) : null }
        </div>
      </UserProvider>
    );
  }
}

export default App;
