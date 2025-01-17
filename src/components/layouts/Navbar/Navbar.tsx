interface NavbarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bgColor?: string;
  color?: string;
  shadow?: boolean;
}

function Navbar({ left, right, bgColor, color, shadow }: NavbarProps) {
  return (
    <nav
      className={shadow ? 'navbar navbar-shadow' : 'navbar'}
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
