import PropTypes from "prop-types";

function Header({ title, msg }) {
  // var t = props.title;
  // var m = props.msg;

  // var { title, msg } = props;

  return (
    <>
      <h3 style={headingStyle}>{title}</h3>
      <p>{msg}</p>
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
  color: "green",
  backgroundColor: "black",
};

export default Header;
