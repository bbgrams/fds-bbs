import React, { Component } from 'react'

// defaultValue 에 다른 값을 또 넣어주지않도록 주의. 한번 값을 넣어줬으면 그 값이 유지되게 한다.
export default class PostForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input type="text" name="title" defaultValue={this.props.title} />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button>작성</button>
        </form>
      </div>
    )
  }
}


// 전송이벤트가 일어났을때 일어나는 일을 위에서부터 정할수있게