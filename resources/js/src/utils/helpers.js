import { store } from "../redux/store";

export function getInitials(fullName = "") {
  const names = fullName.split(" ");
  const initials = names.map((name) => name.charAt(0).toUpperCase()).join("");
  return initials;
}

export function getAuthHeaders() {
  const token = store.getState().auth.token;
  return {
    Authorization: `Bearer ${token}`,
  };
}
