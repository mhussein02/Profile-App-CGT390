import { memo, useMemo, useRef } from "react";
import styles from "./FilterControls.module.css";

function FilterControls({ profiles, role, query, onRoleChange, onQueryChange, onReset }) {
  const inputRef = useRef(null);

  const roles = useMemo(() => {
    const set = new Set();
    profiles.forEach(p => {
      if (p.title) set.add(p.title);
    });
    return ["All", ...Array.from(set).sort()];
  }, [profiles]);

  const handleReset = () => {
    onReset();
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={styles.controls}>
      <select value={role || "All"} onChange={(e) => onRoleChange(e.target.value === "All" ? "" : e.target.value)}>
        {roles.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search by name"
      />
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default memo(FilterControls);
