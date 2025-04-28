const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem("cartState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("cartState", serialized);
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }
};

const preloadedState = {
  cart: loadFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Save every time store changes
store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});
