interface NavbarProps {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  bgColor?: string;
  color?: string;
  shadow?: boolean;
}

function Navbar({
  className = '',
  left,
  right,
  bgColor,
  color,
  shadow,
}: NavbarProps) {
  return (
    <nav
      className={`${className} navbar ${shadow ? 'navbar-shadow' : ''}`}
      style={{
        backgroundColor: bgColor,
        color,
      }}
    >
      <div className="navbar_left">{left}</div>
      <div className="navbar_right">{right}</div>
    </nav>
  );
}

export default Navbar;
