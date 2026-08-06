'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navigator.module.scss';

const NAV_ITEMS = [
  { label: 'HOME', index: '01', href: '#home' },
  { label: 'ABOUT', index: '02', href: '#about' },
  { label: 'EXPERIENCE', index: '03', href: '#experience' },
  { label: 'PROJECT', index: '04', href: '#project' },
  { label: 'SANDBOX', index: '05', href: '#sandbox' },
] as const;

export default function Navigator() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Forward Through Craft
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              {isOpen ? (
                <>
                  <span className={styles.closeLine} />
                  <span className={styles.closeLineReverse} />
                </>
              ) : (
                <>
                  <span className={styles.menuLine} />
                  <span className={styles.menuLine} />
                </>
              )}
            </span>
            <span className={styles.menuLabel}>{isOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </header>

      <div
        id="site-navigation"
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.overlayContent}>
          <nav className={styles.depth} aria-label="주요 메뉴">
            <ul className={styles.depthList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className={styles.depthItem}>
                  <Link href={item.href} className={styles.depthLink} onClick={closeMenu}>
                    <span className={styles.depthLabel}>{item.label}</span>
                    <span className={styles.depthIndex}>[ {item.index} ]</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <p className={styles.contactLabel}>Direct Contact</p>
            <a href="mailto:yuella219@naver.com" className={styles.contactEmail}>
              yuella219@naver.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
