import PropTypes from "prop-types";

import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
      />
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
