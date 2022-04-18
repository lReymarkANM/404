import './style.css';

const HamburgerMenuIcon = ({ showNav, onToggle }) => {
  return (
    <div
      className={`hamburger-menu-icon ${showNav && 'toggled'}`}
      onClick={() => onToggle()}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default HamburgerMenuIcon;