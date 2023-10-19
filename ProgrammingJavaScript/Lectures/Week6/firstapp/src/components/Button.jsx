const Button = (props) => {
  const { color, text, func } = props;
  return (
    <button onClick={func} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

export default Button;
