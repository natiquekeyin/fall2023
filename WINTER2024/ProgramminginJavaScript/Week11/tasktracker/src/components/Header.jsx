import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  const location = useLocation();
  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
        />
      )}
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
