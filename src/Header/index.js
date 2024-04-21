import "./index.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌸</div>
      <div className="header-icons">
        <nav className="header-nav">
          <ul>
            <li>Shop</li>
            <li>Skills</li>
            <li>Stories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <span className="icon">🔍</span>
        <span className="icon">❤️</span>
        <span className="icon">🛒</span>
        <span className="icon">👤</span>
        <select className="language-select">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
    </header>
  );
};
export default Header;
