import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../components/FetchedProfiles.module.css";
import Card from "../components/Card.jsx";

export default function ProfileDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setErr("");
    fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
      .then(r => {
        if (!r.ok) throw new Error("Bad response");
        return r.json();
      })
      .then(j => {
        if (active) setItem(j || null);
      })
      .catch(() => {
        if (active) setErr("Could not load profile");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return <div className={styles.info}>Loading...</div>;
  if (err) return <div className={styles.error}>{err}</div>;
  if (!item) return <div className={styles.info}>No profile found.</div>;

  return (
    <div style={{ marginTop: 16 }}>
      <Link to="/fetched-profiles" className={styles.info}>Back to Fetched Profiles</Link>
      <div style={{ marginTop: 12 }}>
        <Card
          name={item.name}
          title={item.title}
          imageUrl={item.imageUrl}
          description={item.description}
        />
      </div>
    </div>
  );
}
