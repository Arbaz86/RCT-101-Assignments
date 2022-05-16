import { Logo } from "./Logo";
import { Links } from "./Links";
import { Button } from "./Button";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="links-div">
        <Links />
      </div>
      <Button />
    </nav>
  );
};
