import Button from "./Button";

const QuestionScreen = ({ question, questionNumber, onResult }) => {
  return (
    <div style={styles.container}>
      <h2 style={{ color: "#2F75D6" }}>
        Pytanie {questionNumber}: {question.text}
      </h2>
      {question.answers.map((answer, index) => (
        <Button
          key={index}
          txt={answer.text}
          bgColor="#222"
          onClick={() => onResult(answer)}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default QuestionScreen;
