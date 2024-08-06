import { create } from "zustand";

export const useFollowers = create((set) => ({
  followers: [],
  following: [],
  userProfile: null,
  setFollowers: (followers) => set({ followers }),
  setFollowing: (following) => set({ following }),
  setUserProfile: (userProfile) => set({ userProfile }),
  addFollowing: (userId) => set((state) => ({
    following: [...state.following, userId]
  })),
  removeFollowing: (userId) => set((state) => ({
    following: state.following.filter(id => id !== userId)
  })),
}))