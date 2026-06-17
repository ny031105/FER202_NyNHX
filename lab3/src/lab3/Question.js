import React, { Component } from 'react';

class Question extends Component {
  render() {
  
    const { questionData, currentQuestionIndex, handleAnswerSelect } = this.props;

    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        {/* Hiển thị số thứ tự câu hỏi */}
        <h2>Question {currentQuestionIndex + 1}</h2>
        {/* Hiển thị nội dung câu hỏi */}
        <h3>{questionData.question}</h3>
        
        {/* Danh sách các tùy chọn đáp án */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          {questionData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              style={{
                display: 'block',
                width: '100%',
                padding: '15px',
                textAlign: 'left',
                background: '#fff',
                border: 'none',
                borderBottom: index === questionData.options.length - 1 ? 'none' : '1px solid #ddd',
                color: '#007bff',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;