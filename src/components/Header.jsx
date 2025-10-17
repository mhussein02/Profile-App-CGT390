import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ mode, onToggleMode }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>Team Profiles</div>
        <div className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Home</NavLink>
          <NavLink to="/add" className={({ isActive }) => isActive ? styles.active : styles.link}>Add Profile</NavLink>
          <NavLink to="/fetched-profiles" className={({ isActive }) => isActive ? styles.active : styles.link}>Fetched Profiles</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.link}>About</NavLink>
        </div>
        <button className={styles.modeBtn} type="button" onClick={onToggleMode}>
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </header>
  );
}
