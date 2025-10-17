import { createContext, useContext, useState } from "react";
import suit from "../assets/suit.jpg";
import girlsuit from "../assets/girlsuit.jpg";
import reactLogo from "../assets/react.svg";

const ProfileContext = createContext();

const initialProfiles = [
  { id: 1, name: "John Doe", title: "Web Developer", imageUrl: suit, description: "Builds SPA UIs", email: "john@example.com" },
  { id: 2, name: "Jane Smith", title: "Backend Engineer", imageUrl: girlsuit, description: "APIs and DBs", email: "jane@example.com" },
  { id: 3, name: "Carlos Rivera", title: "Product Manager", imageUrl: reactLogo, description: "Roadmaps", email: "carlos@example.com" }
];

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState(initialProfiles);

  const addProfile = (p) => {
    const id = Date.now();
    setProfiles(prev => [{ id, ...p }, ...prev]);
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfiles() {
  return useContext(ProfileContext);
}
