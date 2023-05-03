import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItem from "../components/NavItem";
import Link from "next/link";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbar}>
        <div className={click ? styles.navmenu : styles.navmenuactive}>
          <ul className={styles.navmenu}>
            <li onClick={handleMenuClick} className={styles.submenu}>
              <Link href="/">Home</Link>
            </li>
            <NavItem
              title="Speak Tools"
              items={[
                {
                  href: "/communication/discord",
                  title: "Discord Updated",
                },
                {
                  href: "/communication/zoom",
                  title: "Zoom Video",
                },
              ]}
            />
            <NavItem
              title="Streaming"
              items={[
                {
                  href: "/streamming/obs-studio",
                  title: "OpenBroadCaster",
                },
              ]}
            />

            <NavItem
              title="Browsers"
              items={[
                {
                  href: "/browsers/brave",
                  title: "Brave",
                },
              ]}
            />
            <NavItem
              title="Windows"
              items={[
                {
                  href: "/windows/netbeans-8.2",
                  title: "NetBeans 8.2",
                },
                {
                  href: "/windows/visual-studio-code",
                  title: "Visual Studio Code",
                },
              ]}
            />
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.hamburguer} onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
