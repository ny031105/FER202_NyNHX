import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state đúng theo cấu trúc hình ảnh minh họa trong tài liệu
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        }
        
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    };
  }

  // Phương thức xử lý khi người dùng chọn một đáp án
  handleAnswerSelect = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const currentQuestionData = questions[currentQuestion];
    
    let newScore = score;
    // Kiểm tra xem đáp án được chọn có chính xác không
    if (selectedOption === currentQuestionData.answer) {
      newScore = score + 1; // Đúng thì tăng điểm
    }

    // Kiểm tra xem đã là câu hỏi cuối cùng chưa
    if (currentQuestion + 1 < questions.length) {
      // Nếu chưa thì tăng chỉ số câu hỏi lên 1
      this.setState({
        score: newScore,
        currentQuestion: currentQuestion + 1
      });
    } else {
      // Nếu đã trả lời hết câu hỏi, chuyển trạng thái kết thúc quiz thành true
      this.setState({
        score: newScore,
        quizEnd: true
      });
    }
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div>
        {/* Điều kiện render: Nếu quizEnd là true thì hiển thị màn hình điểm, ngược lại hiển thị câu hỏi */}
        {quizEnd ? (
          <Score score={score} />
        ) : (
          <Question
            questionData={questions[currentQuestion]}
            currentQuestionIndex={currentQuestion}
            handleAnswerSelect={this.handleAnswerSelect}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;