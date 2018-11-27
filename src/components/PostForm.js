import React, { Component } from 'react'
import s from './PostForm.module.scss'
import classNames from 'classnames'

// defaultValue 에 다른 값을 또 넣어주지않도록 주의. 한번 값을 넣어줬으면 그 값이 유지되게 한다.
export default class PostForm extends Component {
  static defaultProps = {
    // 모든 컴포넌트에는 default props가 있어야하고 모든 default props에는 주석으로 사용 설명서를 달아놓는다.
    // true가 주어지면, 편집 모드 스타일이 적용됨
    editing: false // editing이라는 값이 주어지지않았을때에는 false라는 값이 들어간다.
  }
  render() {
    const {editing} = this.props
    const titleClass = classNames(
      s.titleInput,
      {
        // editing이 true일 때에 s.editing을 붙인다.
        // 객체 리터럴에서 속성 이름에 대괄호를 입력했을 떄 대괄호 안의 표현식의 결과값이 속성 이름이 된다.
        [s.editing] : editing
      }
    )
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input className={titleClass} type="text" name="title" defaultValue={this.props.title} />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button className={s['form-button']}>작성</button>
        </form>
      </div>
    )
  }
}

// 전송이벤트가 일어났을때 일어나는 일을 위에서부터 정할수있게