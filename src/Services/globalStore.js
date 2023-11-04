const { create } = require("zustand");

const globalStore = create((set) => ({
  kartItems: [],
  addItemToKart: (newKartItem) =>
    set((store) => ({
      kartItems: [...store.kartItems, newKartItem],
    })),

  modifyKartItem: (modifiedKartItem) =>
    set((store) => {
      const newKart = store.kartItems.filter(
        (item) => item.id !== modifiedKartItem.id
      );
      return { kartItems: [...newKart, modifiedKartItem] };
    }),
  removeKartItem: (itemToRemove) =>
    set((store) => {
      const newKart = store.kartItems.filter(
        (item) => item.id !== itemToRemove.id
      );
      return { kartItems: [...newKart] };
    }),
}));
export default globalStore;
