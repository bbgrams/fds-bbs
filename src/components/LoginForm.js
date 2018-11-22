import React from "react";
import { UserConsumer } from "../contexts/UserContext";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef(); // DOM node를 가리킬 수 있는 화살표당!
    this.passwordRef = React.createRef();
  }

  render() {
    const { onRegister } = this.props; // 분해대입으로 속성을 꺼내와서 변수명 설ㅈㅇ
    // 아무 의미 없는 내용으로 감싸는 법
    //  1. <div></div>
    //  2. <React.Fragment></React.Fragment>
    //  3. <></> : 2번과 같은 코드이지만 최신버전에서만 동작한다.
    return (
      // provider에서 넘겨주는 login이라는 함수를 로그인폼에서 호출
      <UserConsumer>
        {({ login }) => (
          <React.Fragment>
            <form
              onSubmit={e => {
                e.preventDefault();
                const username = e.target.elements.username.value;
                const password = e.target.elements.password.value;
                login(username, password)
              }}
            >
              <h1>로그인</h1>
              <input ref={this.usernameRef} type="text" name="username" />
              <input ref={this.passwordRef} type="password" name="password" />
              <button>로그인</button>
            </form>
            <button onClick={() => onRegister()}>회원가입</button>
          </React.Fragment>
        )}
      </UserConsumer>
    );
  }
}

// ref 사용해보기!
// 폼을 안쓰고 제어되지않는 컴포넌트를 쓰고싶다 => DOM 객체를 가져와야한다.
// 폼을 안쓰면 e.target.elements.~을 사용 못한다.
// 이럴때 ref를 붙여줘야한다.
