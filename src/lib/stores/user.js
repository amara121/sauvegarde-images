import { create } from "zustand";

export const useUser = create((set) => ({
  user: null,
  addUser: (user) => set({ user }),
  updateUser: (newInfo) => set((state) => ({
    user: { ...state.user, ...newInfo }
  })),
}));
