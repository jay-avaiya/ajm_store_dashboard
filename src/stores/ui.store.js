import { create } from 'zustand'

 

export const useUIStore = create()((set) => ({
  counter: 0,
  theme: 'light',
  
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),

  incrementCounter: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),
    
  decrementCounter: () =>
    set((state) => ({
      counter: state.counter - 1,
    })),
}))
