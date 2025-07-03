import { create } from 'zustand';

const useThemeStore = create((set) => ({
  darkMode: false,
  hydrated: false,
  hydrate: () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-dark');
      if (saved !== null) set({ darkMode: saved === 'true', hydrated: true });
      else set({ hydrated: true });
    }
  },
  toggleDarkMode: () => set((state) => {
    const newValue = !state.darkMode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-dark', newValue);
    }
    return { darkMode: newValue };
  }),
}));

export default useThemeStore; 