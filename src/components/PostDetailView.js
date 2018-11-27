import React, { Component } from 'react';
import Layout from './Layout';
import { UserConsumer } from '../contexts/UserContext';
import withLoading from '../hoc/withLoading';
import { Helmet } from 'react-helmet';

class PostDetailView extends Component {
  render() {
    const { postId, onPostEdit, userId, title, body } = this.props;

    return (
      <Layout title="게시물 내용">
        <Helmet>
          <title>게시물 - ${title}</title>
        </Helmet>
        <h1>게시글</h1>
        <UserConsumer>
          {({ id }) => {
            if (userId === id) {
              return (
                <button onClick={() => onPostEdit(postId)}>수정하기</button>
              );
            }
          }}
        </UserConsumer>
        <h2>{title}</h2>
        <p>{body}</p>
      </Layout>
    );
  }
}

export default withLoading(PostDetailView);
