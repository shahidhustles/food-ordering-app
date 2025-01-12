"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
//we are converting the part that needs use client into a comp, so that we keep header as server component

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? classes.active : ""}
    >
      {children}
    </Link>
  );
};
export default NavLink;
