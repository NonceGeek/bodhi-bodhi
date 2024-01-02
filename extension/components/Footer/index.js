import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://x.com/0xleeduckgo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
        ❤️follow my twitter❤️
        </span>
      </a>
    </footer>
  );
}
