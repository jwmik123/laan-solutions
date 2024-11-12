import { create } from "zustand";

const useProjectStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
}));

export default useProjectStore;
