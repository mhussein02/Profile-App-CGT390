import { memo } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import appStyles from "../App.module.css";

function ProfilesGrid({ items, getHref }) {
  if (!items || items.length === 0) return <p>No results.</p>;
  return (
    <div className={appStyles.grid}>
      {items.map(p => {
        const card = (
          <Card
            key={p.id}
            name={p.name}
            title={p.title}
            imageUrl={p.imageUrl}
            description={p.description}
          />
        );
        if (getHref) {
          return (
            <Link key={p.id} to={getHref(p)} style={{ textDecoration: "none", color: "inherit" }}>
              {card}
            </Link>
          );
        }
        return card;
      })}
    </div>
  );
}

export default memo(ProfilesGrid);
