import { create } from "zustand";

const useProjectStore = create((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export default useProjectStore;
