import React, { Component } from "react";
import api from "../api";

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: null
    };
  }

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      // 로컬스토리지에 토큰이 들어있다면 `/me` 경로에 요청해서
      await this.refreshUser();
    }
  }

  async login(username, password) {
    // handleSubmit(e) => login(username, password)
    // 로그인이라는 기능만 있는 함수
    // provider에서 넘겨주는 login이라는 함수를 로그인폼에서 호출
    const res = await api.post("/users/login", {
      username,
      password
    });
    localStorage.setItem("token", res.data.token);
    console.log(`로그인 성공 : ${res.data.token}`);
    await this.refreshUser();
    // 게시글 목록 보여주기
    this.props.onPostListPage();
  }

  logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("token");
    // 사용자 정보 캐시 초기화
    this.setState({
      id: null,
      username: null
    });
    // TODO : 로그인 폼 보여주기
  }

  async refreshUser() {
    // 요청보내서 받아내는 함수
    const res2 = await api.get("/me"); // username, id가 날라온다.
    this.setState({
      id: res2.data.id,
      username: res2.data.username
    });
  }
  render() {
    // UserConsumer에서 받는 객체
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this),
      logout: this.logout.bind(this)
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// 고차함수 만들어보기 : with로 시작하는것이 관례이다.
function withUser(WrappedComponent) {
  return function(props) {
    // 함수형 컴포넌트(엘리먼트를 반환하는 함수) 반환하기
    return (
      // 이 js 안에서는 UserConsumer가 Consumer로 사용된다.
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };

// userProvider는 app에 대한 의존성이 있다.
// app에 의존하고있다.
// 컴포넌트간의 의존성이 있을 수 있고 의존성이 필요한 컴포넌트가 구조상 밑에 있어야 한다.
// 컴포넌트 A가 B의 기능을 필요로 한다면 컴포넌트 A는 B 아래에 있어야 한다.

// UserCOntext에는 많은 기능이 들어있고 많은 페이지에서 이 기능들을 필요로한다 => 횡단 관심사
//  UserConsumer를 쉽게 적용 할 수 있는 고차컴포넌트를 만들어보자
