import { useState } from "react";
import styles from "./AddProfileForm.module.css";

export default function AddProfileForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!title.trim()) e.title = "Title is required";
    if (!bio.trim() || bio.trim().length < 10) e.bio = "Bio must be at least 10 characters";
    if (!image.trim()) e.image = "Image URL is required";
    else {
      try { new URL(image); } catch { e.image = "Enter a valid URL"; }
    }
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      setSuccess("");
      return;
    }
    onAdd({
      name: name.trim(),
      email: email.trim(),
      title: title.trim(),
      description: bio.trim(),
      imageUrl: image.trim()
    });
    setName("");
    setEmail("");
    setTitle("");
    setBio("");
    setImage("");
    setErrors({});
    setSuccess("Profile added successfully");
    setTimeout(() => setSuccess(""), 2500);
  };

  const err = (k) => errors[k];

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.heading}>Add Profile</h2>

      <div className={styles.row}>
        <label className={styles.label}>Name</label>
        <input
          className={`${styles.input} ${err("name") ? styles.invalid : ""}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
        {err("name") && <div className={styles.error}>{errors.name}</div>}
      </div>

      <div className={styles.row}>
        <label className={styles.label}>Email</label>
        <input
          className={`${styles.input} ${err("email") ? styles.invalid : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
        />
        {err("email") && <div className={styles.error}>{errors.email}</div>}
      </div>

      <div className={styles.row}>
        <label className={styles.label}>Title</label>
        <input
          className={`${styles.input} ${err("title") ? styles.invalid : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Role or title"
        />
        {err("title") && <div className={styles.error}>{errors.title}</div>}
      </div>

      <div className={styles.row}>
        <label className={styles.label}>Bio</label>
        <textarea
          className={`${styles.textarea} ${err("bio") ? styles.invalid : ""}`}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Short bio"
        />
        {err("bio") && <div className={styles.error}>{errors.bio}</div>}
      </div>

      <div className={styles.row}>
        <label className={styles.label}>Image</label>
        <input
          className={`${styles.input} ${err("image") ? styles.invalid : ""}`}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
        />
        {err("image") && <div className={styles.error}>{errors.image}</div>}
      </div>

      <div className={styles.actions}>
        <button className={styles.submit} type="submit">Add</button>
        {success && <div className={styles.success}>{success}</div>}
      </div>
    </form>
  );
}
