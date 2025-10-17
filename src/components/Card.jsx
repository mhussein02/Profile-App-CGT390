import { memo, useLayoutEffect, useRef } from "react";
import styles from "./Card.module.css";

function Card({ name, title, imageUrl, description }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const w = ref.current.offsetWidth;
    ref.current.style.setProperty("--card-w", `${w}px`);
  });
  const heading = name || title;
  return (
    <div ref={ref} className={`${styles.card} ${styles.fadeIn}`}>
      {imageUrl && <img src={imageUrl} alt={heading || "Profile"} className={styles.image} />}
      {heading && <h3 className={styles.name}>{heading}</h3>}
      {title && <p className={styles.title}>{title}</p>}
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}

export default memo(Card);
