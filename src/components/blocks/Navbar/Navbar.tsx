import { PropsVoid } from '../../../models.ts';

export interface NavbarProps extends PropsVoid {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bgColor?: string;
  color?: string;
  shadow?: boolean;
}

// TODO: Remove divs with no content, fix content to sides regardless of if other side is empty
// TODO: Add support for center content
// TODO: Add support for responsive design
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
