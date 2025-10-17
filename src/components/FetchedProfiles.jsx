import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "../components/FetchedProfiles.module.css";
import Card from "../components/Card.jsx";

export default function FetchedProfiles() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const location = useLocation();

  useEffect(() => {
    let active = true;
    setLoading(true);
    setErr("");
    fetch("/profiles.json")
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then(j => {
        if (active) setData(Array.isArray(j) ? j : []);
      })
      .catch(() => {
        if (active) setErr("Could not load profiles");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const roles = useMemo(() => {
    const s = new Set();
    data.forEach(p => {
      if (p.title) s.add(p.title);
    });
    return ["All", ...Array.from(s).sort()];
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter(p => (role === "" ? true : p.title === role));
  }, [data, role]);

  const isDetail = location.pathname.startsWith("/fetched-profiles/profile/");

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>Fetched Profiles</div>
        <div className={styles.controls}>
          <select
            className={styles.select}
            value={role || "All"}
            onChange={(e) => setRole(e.target.value === "All" ? "" : e.target.value)}
          >
            {roles.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {loading && <div className={styles.info}>Loading...</div>}
      {!loading && err && <div className={styles.error}>{err}</div>}

      {!isDetail && !loading && !err && filtered.length === 0 && <div className={styles.info}>No results.</div>}

      {!isDetail && !loading && !err && filtered.length > 0 && (
        <div className={styles.grid}>
          {filtered.map(p => (
            <Link key={p.id} to={`profile/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card
                name={p.name}
                title={p.title}
                imageUrl={p.imageUrl}
                description={p.description}
              />
            </Link>
          ))}
        </div>
      )}

      <Outlet />
    </section>
  );
}
