import React, { Component } from 'react';
import api from '../api';
import Layout from '../components/Layout';
import { UserConsumer } from '../contexts/UserContext';
import classNames from 'classnames';
import '../components/PostList.scss';
import PostList from '../containers/PostList';

export default class PostListPage extends Component {
  render() {
    const { onPostDetail, onPostWrite, onLoginFormPage } = this.props;
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <PostList
          onPostDetail={onPostDetail}
          onPostWrite={onPostWrite}
          onLoginFormPage={onLoginFormPage}
        />
      </Layout>
    );
  }
}

// react snippet ? 단축키
// rcc : 초기 설정
// rconst : constructor
// api하고 엔터 치면 차동으로 상단에 api가 import 된다.

// componentDidMount 가 비동기함수라고해도 리액트는 기다려주지않는다.
// PostList 그려짐. => componentDidMount 실행 => 데이터 불러옴 => setState함 => 화면을 다시 그림
