import React from 'react'
import api from '../api'



export default class LoginForm extends React.Component{
  constructor(props) {
    super(props)
    this.usernameRef = React.creatRef() // DOM node를 가리킬 수 있는 화살표당!
    this.passwordRef = React.creatRef()
  }
  
  async handleSubmit(e){
    e.preventDefault()
    const username = this.usernameRef.current.value
    const password = e.target.elements.password.value;
    const res = api.post('/users/login',{
      username,
      password
    })
    localStorage.setItem('token', res.data.token)
    console.log(`로그인 성공 : ${res.data.token}`)
    // TODO : 게시글 목록 보여주기
  }
  render(){
    const {onRegister} = this.props // 분해대입으로 속성을 꺼내와서 변수명 설ㅈㅇ
    return(
      // 아무 의미 없는 내용으로 감싸는 법
      //  1. <div></div>
      //  2. <React.Fragment></React.Fragment>
      //  3. <></> : 2번과 같은 코드이지만 최신버전에서만 동작한다.
      <React.Fragment>  

        <form onSubmit={e => this.handleSubmit(e)}>
          <h1>로그인</h1>
          <input ref={this.usernameRef} type="text" name="username" />
          <input ref={this.passwordRef} type="password" name="password" />
          <button>로그인</button>

        </form>
        <button onClick={() => onRegister()}>회원가입</button>
      </React.Fragment>
    )
  }
}


// ref 사용해보기!
// 폼을 안쓰고 제어되지않는 컴포넌트를 쓰고싶다 => DOM 객체를 가져와야한다.
// 폼을 안쓰면 e.target.elements.~을 사용 못한다.
// 이럴때 ref를 붙여줘야한다.