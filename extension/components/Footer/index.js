import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://bodhi.wtf/13773"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
        ❤️Support Bodhi-Bodhi❤️
        </span>
      </a>
    </footer>
  );
}
