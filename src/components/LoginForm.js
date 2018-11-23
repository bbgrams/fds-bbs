import React from "react";
import { UserConsumer, withUser } from "../contexts/UserContext";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef(); // DOM node를 가리킬 수 있는 화살표당!
    this.passwordRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    this.props.login(username, password)
  }

  render() {
    const { onRegister } = this.props; // 분해대입으로 속성을 꺼내와서 변수명 설ㅈㅇ
    // 아무 의미 없는 내용으로 감싸는 법
    //  1. <div></div>
    //  2. <React.Fragment></React.Fragment>
    //  3. <></> : 2번과 같은 코드이지만 최신버전에서만 동작한다.
    return (
      // provider에서 넘겨주는 login이라는 함수를 로그인폼에서 호출
          <React.Fragment>
          <form onSubmit={e => this.handleSubmit(e)}>
              <h1>로그인</h1>
              <input ref={this.usernameRef} type="text" name="username" />
              <input ref={this.passwordRef} type="password" name="password" />
              <button>로그인</button>
            </form>
            <button onClick={() => onRegister()}>회원가입</button>
          </React.Fragment>
    );
  }
}

export default withUser(LoginForm);


// ref 사용해보기!
// 폼을 안쓰고 제어되지않는 컴포넌트를 쓰고싶다 => DOM 객체를 가져와야한다.
// 폼을 안쓰면 e.target.elements.~을 사용 못한다.
// 이럴때 ref를 붙여줘야한다.


  // 이 함수형 컴포넌트는 로그인폼처럼 쓸 수 있다. 
  // 이 컴포넌트는 받은 props들을 그대로 로그인 폼에 넘겨주고있다 = 사용법이 로그인폼과 똑같다.
  // 로그인폼과 똑같은 사용법을 가진 컴포넌트를 만들어서 UserConsumer로 감싸주었다.