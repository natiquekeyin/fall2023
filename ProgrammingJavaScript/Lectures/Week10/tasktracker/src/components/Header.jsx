import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click in header comp.");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
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
