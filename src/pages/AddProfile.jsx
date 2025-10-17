import { useNavigate } from "react-router-dom";
import { useProfiles } from "../context/ProfileContext.jsx";
import AddProfileForm from "../components/AddProfileForm.jsx";

export default function AddProfile() {
  const { addProfile } = useProfiles();
  const navigate = useNavigate();

  const handleAdd = (p) => {
    addProfile(p);
    navigate("/");
  };

  return (
    <main>
      <AddProfileForm onAdd={handleAdd} />
    </main>
  );
}
