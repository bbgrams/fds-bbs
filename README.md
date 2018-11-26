# 리액트로 게시판 만들기

1. 글 목록
1. 글 읽기
1. 글 쓰기
1. 글 수정하기


## Context
### 내 정보는 어디에서는 사용되는 정보이기 때문에 context를 이용하자.

1. 로그인을 하는 순간, 
    ```js
    // 로그인 폼 안에 있는 handleSubmit을 UserProvider로 옮긴다.
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
  ```
  `/me`에 요청을 보내서....

1. 재접속 하는 순간 provider에 넣어준다.
    - 새로고침 했을 때 토큰이 남아있다면 `/me`에 토큰과 요청을 보내 받아온다.

### 내가 작성한 글에서만 수정버튼 출력

### 게시판 작업 - LoginForm에서  라이프사이클 메소드에서 context에 접근하기 부분 코드 수정 못했음....


### `classnames` 라이브러리 
- `npm install classnames`


### 컴포넌트 분할(PostForm, PostWrite, PostEdit)
- 화면을 그리는 컴포넌트와 통신을 하는 컴포넌트를 분리하자.
- PC는 다른 컴포넌트에 의존하지않게 분리하자
- CC를 HOC