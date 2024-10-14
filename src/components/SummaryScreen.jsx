import Button from "./Button";

const SummaryScreen = ({ score, totalQuestions, answers, onReset }) => {
  const percentage = (score / totalQuestions) * 100;
  const isPassed = percentage >= 80;

  return (
    <div style={styles.container}>
      {(isPassed && (
        <h2 style={{ ...styles.h2, color: "#008000" }}>
          Gratulacje! Quiz zaliczony!
        </h2>
      )) ||
        (!isPassed && (
          <h2 style={{ ...styles.h2, color: "#FF0000" }}>
            Niestety, quiz niezaliczony
          </h2>
        ))}
      <p style={{ fontSize: "1.5rem" }}>
        Twój wynik to: {percentage}% ({score} z {totalQuestions} poprawnych
        odpowiedzi)
      </p>
      <ul style={styles.ul}>
        {answers.map((answer, index) => (
          <li key={index} style={{ ...styles.li, color: "#3071BD" }}>
            Pytanie {index + 1}: {answer.question}
            <br />
            <span style={{ color: "#222" }}>Twoja odpowiedź: </span>
            <span
              style={{
                color: answer.selectedAnswer.isCorrect ? "#94C973" : "#FF0000",
              }}
            >
              {answer.selectedAnswer.text}
            </span>
          </li>
        ))}
      </ul>
      <Button txt="Powrót do startu" bgColor="#026800" onClick={onReset} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  h2: {
    fontSize: "4rem",
  },
  ul: {
    listStyleType: "none",
    textAlign: "left",
  },
  li: {
    padding: "0.4rem 0",
  },
};

export default SummaryScreen;
