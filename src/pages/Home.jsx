import { useMemo, useReducer, useCallback } from "react";
import { useProfiles } from "../context/ProfileContext.jsx";
import Introduction from "../components/Introduction.jsx";
import FilterControls from "../components/FilterControls.jsx";
import ProfilesGrid from "../components/ProfilesGrid.jsx";

const initial = { role: "", query: "" };
function reducer(state, action) {
  switch (action.type) {
    case "setRole":
      return { ...state, role: action.payload };
    case "setQuery":
      return { ...state, query: action.payload };
    case "reset":
      return initial;
    default:
      return state;
  }
}

export default function Home() {
  const { profiles } = useProfiles();
  const [state, dispatch] = useReducer(reducer, initial);

  const filtered = useMemo(() => {
    const q = state.query.trim().toLowerCase();
    return profiles.filter(p => {
      const roleOk = state.role === "" || p.title === state.role;
      const nameOk = q === "" || (p.name || "").toLowerCase().includes(q);
      return roleOk && nameOk;
    });
  }, [profiles, state.role, state.query]);

  const onRoleChange = useCallback((v) => dispatch({ type: "setRole", payload: v }), []);
  const onQueryChange = useCallback((v) => dispatch({ type: "setQuery", payload: v }), []);
  const onReset = useCallback(() => dispatch({ type: "reset" }), []);

  return (
    <main>
      <Introduction />
      <FilterControls
        profiles={profiles}
        role={state.role}
        query={state.query}
        onRoleChange={onRoleChange}
        onQueryChange={onQueryChange}
        onReset={onReset}
      />
      <ProfilesGrid items={filtered} />
    </main>
  );
}
