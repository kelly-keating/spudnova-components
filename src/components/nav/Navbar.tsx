interface NavbarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bgColor?: string;
  color?: string;
  shadow?: boolean;
}

function Navbar ({ left, right, bgColor, color, shadow }: NavbarProps) {
  return (
    <nav
      className={shadow ? "navbar navbar-shadow" : "navbar"}
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <div>{left}</div>
      <div>{right}</div>
    </nav>
  );
}

export default Navbar;	
