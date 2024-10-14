import Button from "./Button";

const StartScreen = ({ onStart }) => {
  return (
    <>
      <h1>Quiz JavaScript</h1>
      <Button txt="Rozpocznij Quiz" bgColor="#007bff" onClick={onStart} />
    </>
  );
};

export default StartScreen;
