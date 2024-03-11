function Header({ title, text }) {
  return (
    <header>
      <div>
        <h2>Header Component</h2>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </header>
  );
}

export default Header;
