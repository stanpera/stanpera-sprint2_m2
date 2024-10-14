import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import SummaryScreen from "./components/SummaryScreen";
import WrapperApp from "./components/WrapperApp";
import { QUESTIONS } from "./components/quizQuestions";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setCurrentScreen("quiz");
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (selectedAnswer) => {
    setAnswers((prev) => [
      ...prev,
      { question: QUESTIONS[currentQuestionIndex].text, selectedAnswer}
    ]);

    if (selectedAnswer.isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentScreen("summary");
    }
  };

  const handleRestart = () => {
    setCurrentScreen("start");
  };

  return (
    <WrapperApp>
      {currentScreen === "start" && <StartScreen onStart={handleStart} />}
      {currentScreen === "quiz" && (
        <QuestionScreen
          question={QUESTIONS[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          onResult={handleAnswer} 
        />
      )}
      {currentScreen === "summary" && (
        <SummaryScreen
          score={score}
          totalQuestions={QUESTIONS.length}
          answers={answers}
          onReset={handleRestart}
        />
      )}
    </WrapperApp>
  );
};

export default App;
