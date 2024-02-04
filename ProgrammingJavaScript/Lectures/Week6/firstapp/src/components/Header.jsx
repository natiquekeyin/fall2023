import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, msg }) {
  const someFunc = () => {
    console.log("I am some Function");
  };
  return (
    <>
      <h3 style={headingStyle}>{title}</h3>
      <p>{msg}</p>
      <Button color="green" text="Hello" func={someFunc} />
      {/* <Button color="green" text="Play" />
      <Button color="yellow" text="Warnin" /> */}
    </>
  );
}

Header.defaultProps = {
  title: "Default title",
  msg: "This is default message",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

var headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;

// var t = props.title;
// var m = props.msg;

// var { title, msg } = props;

{
  /* <button className="btn">Add</button> */
}
{
  /* instead of creating button like above */
}
