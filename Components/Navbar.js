import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiMenuAddFill } from 'react-icons/ri';
import Link from 'next/link';

function NavItem({ title, items }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <li
      className={styles.submenu}
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
    >
      <Link href=''>
        {title}
        <RiMenuAddFill size={15} style={{ paddingLeft: '5px' }} />
      </Link>

      <ul className={`${openMenu ? styles['anim-up'] : ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [showBrowsersSubMenu, setShowBrowsersSubMenu] = useState(false);
  const [showWindowsSubMenu, setShowWindowsSubMenu] = useState(false);

  const handleToggleBrowsersSubMenu = () => {
    setShowBrowsersSubMenu(!showBrowsersSubMenu);
  };

  const handleToggleWindowsSubMenu = () => {
    setShowWindowsSubMenu(!showWindowsSubMenu);
  };

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
              <Link href='/'>Home</Link>
            </li>
            <NavItem
              title='Speak Tools'
              items={[
                {
                  href: '/communication/discord',
                  title: 'Discord Updated'
                },
                {
                  href: '/communication/zoom',
                  title: 'Zoom Video'
                }
              ]}
            />
            <NavItem
              title='Streaming'
              items={[
                {
                  href: '/streamming/obs-studio',
                  title: 'OpenBroadCaster'
                }
              ]}
            />

            <li
              className={styles.submenu}
              onMouseEnter={handleToggleBrowsersSubMenu}
              onMouseLeave={handleToggleBrowsersSubMenu}
            >
              <Link href=''>
                Browsers
                <RiMenuAddFill size={15} style={{ paddingLeft: '5px' }} />
              </Link>
              {showBrowsersSubMenu && (
                <ul>
                  <li>
                    <Link href='/browsers/brave'>Brave</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={styles.submenu}
              onMouseEnter={handleToggleWindowsSubMenu}
              onMouseLeave={handleToggleWindowsSubMenu}
            >
              <Link href=''>
                Windows
                <RiMenuAddFill size={15} style={{ paddingLeft: '5px' }} />
              </Link>
              {showWindowsSubMenu && (
                <ul>
                  <li>
                    <Link href='/windows/visual-studio-code'>
                      Visual Studio Code
                    </Link>
                  </li>
                  <li>
                    <Link href='/windows/netbeans-8.2'>
                      NetBeans IDE 8.2 Download
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href='/contactus'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.hamburguer} onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#fff' }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
