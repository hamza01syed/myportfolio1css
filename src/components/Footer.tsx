// components/Footer.tsx
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import { FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="#projects" className={styles.link}>Projects</Link>
          <Link href="#skills" className={styles.link}>Skills</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </div>
        
        <div className={styles.socials}>
          <Link href="https://github.com/hamza01syed" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/syed-humza-najam-833762268" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedin />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100006989717151" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaFacebook />
          </Link>
        </div>
        
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Syed Humza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
