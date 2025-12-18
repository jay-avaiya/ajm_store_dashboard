import { create } from 'zustand'


export const useAuthStore = create()(
     persist(
          (set) => ({
               user: null,
               token: null,
               isAuthenticated: false,
               
               login: (user, token) =>
                    set({ user, token, isAuthenticated: true }),
               logout: () =>
                    set({ user: null, token: null, isAuthenticated: false }),
          }),
          {
               name: 'auth-storage', // localStorage key
          }
     )
)
