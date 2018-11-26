import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';
import {UserConsumer} from '../contexts/UserContext';
import classNames from 'classnames'
import './PostList.scss'


export default class PostList extends Component {
   constructor(props) {
    super(props) 
    this.state = {
      posts: [],
      loading : true
    }
  }
 
  async componentDidMount() {
    const res = await api.get('/posts')
    this.setState({
      posts : res.data,
      loading : false
    })
  }
 
 
  render() {
    const {posts} = this.state
    const { onPostDetail, onPostWrite, onLoginFormPage} = this.props
    const titleClass = classNames(
      'PostList__title', // 항상 들어가는 클래스명
      {
        'PostList__title--loading' : this.state.loading // 상태에 따른 클래스 설정
      }

    )
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <div className="PostList">
          <button onClick={() => onPostWrite()}>글쓰기</button>
          <h1 className={titleClass}>자유게시판</h1>
          <ul className="PostList__list">
            {posts.map(post => (
            <li className="PostList__item" key={post.id} onClick={() => onPostDetail(post.id)}>
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
  }
}

// react snippet ? 단축키
// rcc : 초기 설정
// rconst : constructor
// api하고 엔터 치면 차동으로 상단에 api가 import 된다.

// componentDidMount 가 비동기함수라고해도 리액트는 기다려주지않는다.
// PostList 그려짐. => componentDidMount 실행 => 데이터 불러옴 => setState함 => 화면을 다시 그림
