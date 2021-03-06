import React, { Component } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

export default class PostListView extends Component {
  render() {
    const { posts, onPostDetail, onPostWrite, loading } = this.props;
    const titleClass = classNames(
      'PostList__title', // 항상 들어가는 클래스명
      {
        'PostList__title--loading': loading, // 상태에 따른 클래스 설정
      }
    );
    console.log(posts);
    return (
      <React.Fragment>
        <Helmet>
          <title>게시물 목록</title>
        </Helmet>
        <div className="PostList">
          <button onClick={() => onPostWrite()}>글쓰기</button>
          <h1 className={titleClass}>자유게시판</h1>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                key={post.id}
                className="PostList__item"
                onClick={() => onPostDetail(post.id)}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
