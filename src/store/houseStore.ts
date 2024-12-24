import { create } from 'zustand'

interface HouseStore {
  wallColor: string
  roofColor: string
  windowColor: string
  setWallColor: (color: string) => void
  setRoofColor: (color: string) => void
  setWindowColor: (color: string) => void
}

export const useHouseStore = create<HouseStore>((set) => ({
  wallColor: '#FFFFFF',
  roofColor: '#8B4513',
  windowColor: '#87CEEB',
  setWallColor: (color) => set({ wallColor: color }),
  setRoofColor: (color) => set({ roofColor: color }),
  setWindowColor: (color) => set({ windowColor: color })
}))