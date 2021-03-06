import React, { Component } from 'react';
import PostForm from './PostForm';
import api from '../api';

export default class PostEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  async componentDidMount() {
    const {
      data: { title, body },
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
    });
  }
  async handleSubmit(title, body) {
    await api.patch(`/posts/${this.props.postId}`, {
      title,
      body,
    });

    // 게시물 세부 페이지 보여주기
    // FIXME :  자기가 작성한 글만 수정 가능하도록 고쳐야 함
    this.props.onPostDetail(this.props.postId);
  }

  render() {
    const { title, body } = this.state;
    if (!title) {
      return 'loading...';
    }
    return (
      <PostForm
        editing={true}
        onSubmit={(title, body) => this.handleSubmit(title, body)}
        title={title}
        body={body}
      />
    );
  }
}
