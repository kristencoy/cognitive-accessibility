export const initState = { theme: "light", fontSize: 16 };

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    }
    case "FONT_INCREASE": {
      return {
        ...state,
        fontSize: state.fontSize + 1,
      };
    }
    case "FONT_DECREASE": {
      return {
        ...state,
        fontSize: state.fontSize - 1,
      };
    }
  }
};