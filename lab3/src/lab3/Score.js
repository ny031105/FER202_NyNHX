import React, { Component } from 'react';

class Score extends Component {
  render() {
    // Nhận điểm số từ props
    const { score } = this.props;

    return (
      <div style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
        <h1>Quiz Ended</h1>
        <h2>Your Score: {score}</h2>
      </div>
    );
  }
}

export default Score;