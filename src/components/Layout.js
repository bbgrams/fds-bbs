import React, { Component } from "react";
import { UserConsumer, withUser } from "../contexts/UserContext";

class Layout extends Component {
  render() {
    const { onLoginFormPage, username, logout } = this.props;
    return (
      <div>
        <div className="header">
          헤더
          <div>{username}</div>
          {username ? (
            <button onClick={logout}>로 그 아 웃</button>
          ) : (
            <button onClick={onLoginFormPage}>로 그 인</button>
          )}
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    );
  }
}

export default withUser(Layout);
// layout을 쓰는 달느쪽에서 default import를 할때는 기능이 업그레이드 된 컴포넌트를 받아서 쓰게 될 것이다.
