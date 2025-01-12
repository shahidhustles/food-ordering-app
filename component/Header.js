import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import classes from "./header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logo} priority alt="logo" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
