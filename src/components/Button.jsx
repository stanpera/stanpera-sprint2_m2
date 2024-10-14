const Button = ({ onClick, txt, bgColor }) => {
  return (
    <button
      style={{ ...styles.button, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {txt}
    </button>
  );
};

const styles = {
  button: {
    width: "23rem",
    color: "#fff",
    padding: "0.6rem 3rem",
    border: "none",
    borderRadius: "0.4rem",
    cursor: "pointer",
    fontSize: "1rem",
    margin: "0.75rem",
  },
};

export default Button;
