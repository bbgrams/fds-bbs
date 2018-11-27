import React, { Component } from 'react'
import classNames from 'classnames'

export default class PostListView extends Component {
  render() {
    const {posts, onPostDetail, onPostWrite, onLoginFormPage, loading } = this.props
    const titleClass = classNames(
      'PostList__title', // 항상 들어가는 클래스명
      {
        'PostList__title--loading': loading // 상태에 따른 클래스 설정
      }

    )
    return <React.Fragment>
      <div className="PostList">
        <button onClick={() => onPostWrite()}>글쓰기</button>
        <h1 className={titleClass}>자유게시판</h1>
        <ul className="PostList__list">
          {posts.map(post => (
            <li
              className="PostList__item"
              key={post.id}
              onClick={() => onPostDetail(post.id)}
            >
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>;
  }
}
