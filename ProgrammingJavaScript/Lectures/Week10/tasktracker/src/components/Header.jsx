import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <Button color="green" text="Add" onClick={onAdd} /> */}

      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "black",
//   backgroundColor: "gray",
// };

export default Header;

// Destructuring of props can be done in one of the ways...
// 1.(props) .... props.title
// 2. (props)... var val=props.title
// 3. ({title})... {title} in my jsx...
