import "./App.css";
import { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import styled from "styled-components";

function App() {
  // const [theme, setTheme] = useState("light");
  // const [fontSize, setFontSize] = useState(16);

  const reducer = (state, action) => {
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

  const initState = { theme: "light", fontSize: 16 };

  const [state, dispatch] = useReducer(reducer, initState);

  // const themeToggle = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  const Paragraph = styled.p`
    font-size: ${state.fontSize}px;
    width: 35rem;
    align-items: center;
    justify-content: center;
  `;

  return (
    <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <h1>Welcome</h1>
        {/* <button onClick={themeToggle}>{theme} Mode</button> */}
        <button onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
          {state.theme} Mode
        </button>
        <div>
          {/* <button onClick={() => setFontSize(fontSize + 1)}>Larger</button>
          <button onClick={() => setFontSize(fontSize - 1)}>Smaller</button> */}
          <button onClick={() => dispatch({ type: "FONT_INCREASE" })}>
            Larger
          </button>
          <button onClick={() => dispatch({ type: "FONT_DECREASE" })}>
            Smaller
          </button>
        </div>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed
          perferendis iure quae modi eaque a magni porro enim iusto minus esse
          officia eos officiis et saepe est consequuntur fuga.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          fugit, dolore soluta tempora, veniam voluptatem quae aspernatur sequi,
          quas recusandae perferendis provident suscipit repellendus labore aut
          culpa vitae voluptatibus ratione!
        </Paragraph>
      </div>
    </ThemeProvider>
  );
}

export default App;
