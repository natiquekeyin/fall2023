import PropTypes from "prop-types";

import Button from "./Button";

function Header({ title }) {
  const onClick = (e) => {
    console.log("click from header component");
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add" color="red" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Default",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
