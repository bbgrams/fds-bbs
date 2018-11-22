import React, { Component } from "react";
import { UserConsumer } from "../contexts/UserContext";

export default class Layout extends Component {
  render() {
    return <div>
        <div className="header">
          헤더
          <UserConsumer>
            {({ username, logout }) => 
              <React.Fragment>
                <div>{username}</div>
                <button onClick={logout}>로 그 아 웃</button>
              </React.Fragment>}
          </UserConsumer>
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>;
  }
}
