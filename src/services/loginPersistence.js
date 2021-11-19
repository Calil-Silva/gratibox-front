const LOCAL_STORAGE_KEY = "loggedUser.data";

export function storeUserData(userData) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
}

export function getUserData() {
  const userData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (userData) return JSON.parse(userData);
  return null;
}

export function removeUserData() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
