// components/Hero.tsx
import Image from 'next/image';
import styles from '../styles/hero.module.css';
import img1 from "@/public/images/syedpic.jpg"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Hi, I am Syed Humza</h1>
          <p className={styles.subtitle}>I am a Web Developer specializing in creating beautiful and functional web applications.</p>
          <a href="#projects" className={styles.ctaButton}>See My Work</a>
        </div>
        
        <div className={styles.imageContainer}>
          <Image src={img1} alt="Syed HUmza" className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
