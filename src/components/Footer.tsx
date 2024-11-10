// components/Footer.tsx
import styles from '../styles/footer.module.css';
import { FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/" className={styles.link}>Home</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
        
        <div className={styles.socials}>
          <a href="https://github.com/hamza01syed" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/syed-humza-najam-833762268" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006989717151" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaFacebook />
          </a>
        </div>
        
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Syed Humza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
