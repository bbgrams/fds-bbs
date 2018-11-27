import React, { Component } from 'react';
import api from '../api';
import { Form } from 'semantic-ui-react';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 현재 입력 필드에 입력된 사용자 이름/암호 (제어되는 컴포넌트)
      username: '',
      password: '',
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    // 사용자 이름 중복체크
    // api/users?username=fds => 뭔가 가져와지면 사용자가 있는것이고 안가져와지면 사용자가 없는것이다.
    const { data: users } = await api.get('/users', {
      params: {
        username,
      },
    });
    if (users.length > 0) {
      alert('중복된 아이디입니다.');
      return; // return을 해버리면 밑에 있는 코드는 실행이 안되고 함수가 바로 종료된다.
    }
    const res = await api.post('/users/register', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    // TODO : 게시글 목록 보여주기
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleFieldChange(e, name) {
    // name 변수에 저장되어있는 문자열을
    // 그대로 속성 이름으로 사용하기
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    // 이벤트 객체를 넘겨야 할 떄는 (e)를 써주어야한다.
    const { username, password } = this.state;
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <h1>회원가입</h1>
        <Form.Input
          labe="사용자이름"
          placeholder="아이디"
          type="text"
          name="username"
          value={username}
          onChange={e => this.handleFieldChange(e, 'username')}
        />
        <Form.Input
          labe="비밀번호"
          placeholder="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={e => this.handleFieldChange(e, 'password')}
        />
        <Form.Button>가입</Form.Button>
      </Form>
    );
  }
}

// 제어되는 컴포넌트를 사용해보자.
// => html태그(input, select, textarea..)들은 자체적인 상태를 가지고있으므로 상태저장소가 여러개 생긴다.
// => 자체적인 상태저장소를 가지지못하도록 제어하는것이 제어되는 컴포넌트이다.
// => value prop을 넘겨준다.
// => 상태 저장소를 REACT에서 관리한다.
// 상태를 리액트 컴포넌트 안에 저장하고 사용자가 입력할때 리액트 상태를 변경해준다
