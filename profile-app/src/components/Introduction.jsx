export default function Introduction() {
  const name = "Michael";
  const about = "I'm learning React components and JSX to build dynamic UIs.";

  return (
    <section className="intro">
      <h2>Hi, I'm {name} 👋</h2>
      <p>{about}</p>
    </section>
  );
}
