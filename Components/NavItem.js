import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { RiMenuAddFill } from "react-icons/ri";
import Link from "next/link";

function NavItem({ title, items }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <li
        className={styles.submenu}
        onMouseEnter={() => setOpenMenu(true)}
        onMouseLeave={() => setOpenMenu(false)}
      >
        <Link href="">
          {title}
          <RiMenuAddFill size={15} style={{ paddingLeft: "5px" }} />
        </Link>

        <ul className={`${openMenu ? styles["anim-up"] : ""}`}>
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
}

export default NavItem;
