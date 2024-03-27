import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2024</p>
      <Link to="/about">About us!</Link>
    </footer>
  );
};

export default Footer;
