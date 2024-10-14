const WrapperApp = ({ children }) => {
  return <div style={styles.wrapper}>{children}</div>;
};
const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
};
export default WrapperApp;
