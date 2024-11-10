"use client"

// components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MyPortfolio</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.open : ''}></span>
        <span className={isOpen ? styles.open : ''}></span>
        <span className={isOpen ? styles.open : ''}></span>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="#projects" className={styles.link}>Projects</Link>
        <Link href="#skills" className={styles.link}>Skills</Link>
        <Link href="#contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
