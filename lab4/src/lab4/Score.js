import React from "react";

function Score({ score }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        marginTop: "30px"
      }}
    >
      <h1
        style={{
          color: "#dc3545",
          fontSize: "60px",
          marginBottom: "20px"
        }}
      >
        Quiz Completed!
      </h1>

      <h2
        style={{
          fontWeight: "normal",
          fontSize: "40px"
        }}
      >
        Your score: {score}
      </h2>
    </div>
  );
}

export default Score;