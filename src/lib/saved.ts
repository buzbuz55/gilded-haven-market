const KEY = "luxe-saved";
export const getSaved = (): string[] => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } };
export const isSaved = (id: string) => getSaved().includes(id);
export const toggleSaved = (id: string) => {
  const s = getSaved();
  const next = s.includes(id) ? s.filter((x) => x !== id) : [...s, id];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next.includes(id);
};
