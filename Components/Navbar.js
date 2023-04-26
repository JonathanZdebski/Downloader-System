import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMenuAddFill } from "react-icons/ri";
import Link from "next/link";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [showSecuritySubMenu, setShowSecuritySubMenu] = useState(false);
  const [showStreamingSubMenu, setShowStreamingSubMenu] = useState(false);
  const [showBrowsersSubMenu, setShowBrowsersSubMenu] = useState(false);
  const [showWindowsSubMenu, setShowWindowsSubMenu] = useState(false);

  const handleToggleSecuritySubMenu = () => {
    setShowSecuritySubMenu(!showSecuritySubMenu);
  };

  const handleToggleStreamingSubMenu = () => {
    setShowStreamingSubMenu(!showStreamingSubMenu);
  };

  const handleToggleBrowsersSubMenu = () => {
    setShowBrowsersSubMenu(!showBrowsersSubMenu);
  };

  const handleToggleWindowsSubMenu = () => {
    setShowWindowsSubMenu(!showWindowsSubMenu);
  };

  useEffect(() => {
    function closeMenu() {
      setIsMenuOpen(false);
    }

    document.querySelectorAll("nav ul li a, .hamburguer").forEach((item) => {
      item.addEventListener("click", handleCloseMenu);
    });

    return () => {
      document.querySelectorAll("nav ul li a, .hamburguer").forEach((item) => {
        item.removeEventListener("click", handleCloseMenu);
      });
    };
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbar}>
        <div className={click ? styles.navmenu : styles.navmenuactive}>
          <ul className={styles.navmenu}>
            <li className={styles.submenu}>
              <Link onClick={handleCloseMenu} href="/">
                Home
              </Link>
            </li>
            <li
              className={styles.submenu}
              onMouseEnter={handleToggleSecuritySubMenu}
              onMouseLeave={handleToggleSecuritySubMenu}
            >
              <Link href="">
                Speak Tools
                <RiMenuAddFill size={15} style={{ paddingLeft: "5px" }} />
              </Link>
              {showSecuritySubMenu && (
                <ul>
                  <li>
                    <Link href="/communication/discord">Discord Updated</Link>
                  </li>
                  <li>
                    <Link href="/security/">Avast Antivirus</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={styles.submenu}
              onMouseEnter={handleToggleStreamingSubMenu}
              onMouseLeave={handleToggleStreamingSubMenu}
            >
              <Link href="">
                Streaming
                <RiMenuAddFill size={15} style={{ paddingLeft: "5px" }} />
              </Link>
              {showStreamingSubMenu && (
                <ul>
                  <li>
                    <Link href="/teste">OpenBroadCaster</Link>
                  </li>
                  <li>
                    <Link href="/teste">YouTube</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={styles.submenu}
              onMouseEnter={handleToggleBrowsersSubMenu}
              onMouseLeave={handleToggleBrowsersSubMenu}
            >
              <Link href="">
                Browsers
                <RiMenuAddFill size={15} style={{ paddingLeft: "5px" }} />
              </Link>
              {showBrowsersSubMenu && (
                <ul>
                  <li>
                    <Link href="/browsers/">Firefox</Link>
                  </li>
                  <li>
                    <Link href="/browsers/">Chrome</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={styles.submenu}
              onMouseEnter={handleToggleWindowsSubMenu}
              onMouseLeave={handleToggleWindowsSubMenu}
            >
              <Link href="">
                Windows
                <RiMenuAddFill size={15} style={{ paddingLeft: "5px" }} />
              </Link>
              {showWindowsSubMenu && (
                <ul>
                  <li>
                    <Link href="/windows/">Visual Studio Code</Link>
                  </li>
                  <li>
                    <Link href="/windows/">NetBeans IDE 8.2 Download</Link>
                  </li>
                </ul>
              )}
            </li>
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
