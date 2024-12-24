import { create } from 'zustand';

interface HouseState {
  viewMode: '2d' | '3d';
  floor: 'ground' | 'first' | 'second' | 'third';
  roofMode: 'open' | 'closed' | 'tinted';
  setViewMode: (mode: '2d' | '3d') => void;
  setFloor: (floor: 'ground' | 'first' | 'second' | 'third') => void;
  setRoofMode: (mode: 'open' | 'closed' | 'tinted') => void;
}

export const useHouseStore = create<HouseState>((set) => ({
  viewMode: '3d',
  floor: 'ground',
  roofMode: 'closed',
  setViewMode: (mode) => set({ viewMode: mode }),
  setFloor: (floor) => set({ floor }),
  setRoofMode: (mode) => set({ roofMode: mode }),
}));