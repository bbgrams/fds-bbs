import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'; // 스토리북의 다른 페이지로 넘어갈수 있게 해주는 함수

import PostForm from './PostForm';

const actions = {
  onSubmit: action('onSubmit'),
};
storiesOf('PostForm', module)
  // action : 테스트용 함수를 쉽게 만들 수 있는 방법
  .add('default', () => <PostForm {...actions} />)
  .add('editing', () => <PostForm {...actions} editing={true} />);
