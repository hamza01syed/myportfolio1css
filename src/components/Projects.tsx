// components/Projects.tsx
import Link from 'next/link';
import styles from '../styles/projects.module.css';

const projects = [
  {
    title: "Academy Website",
    description: "A responsive web application built with NextJS and TypeScript that belongs to education website.",
    techStack: ["NextJS", "TypeScript", "Tailwind"],
    liveLink: "https://hometutorsworld.vercel.app/",
    codeLink: "https://github.com/hamza01syed/htwproject",
  },
  {
    title: "Resume Builder",
    description: "An website created with HTML,Typescript and CSS. It features that user can create a resume ",
    techStack: ["Next.js", "Tailwind", "JavaScript"],
    liveLink: "https://dynamic-resume-alpha.vercel.app/",
    codeLink: "https://github.com/hamza01syed/Dynamic_Resume",
  },
  {
    title: "Role Based Access control project",
    description: "A RESTful API built using Node.js and Express, designed for managing  posts with CRUD operations and authentication.",
    techStack: ["Node.js", "Express", "MongoDB"],
    liveLink: "https://github.com/hamza01syed/RoleBasedAccessController",
    codeLink: "https://github.com/hamza01syed/RoleBasedAccessController",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Live Demo</Link>
                <Link href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>GitHub Code</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
