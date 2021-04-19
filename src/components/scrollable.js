import React, {Component} from 'react'

export default class Scrollable extends Component {
  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 100;
    if (bottom) {
      this.props.isBottom()
    }
  }

  render() {
    return (
      <div onScroll={this.handleScroll} style={{height:'calc(100vh - 60px)', overflow: 'auto'}} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
