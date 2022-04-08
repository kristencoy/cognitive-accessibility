import "./App.css";
import { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import styled from "styled-components";
import { initState, reducer } from "./store/reducer";
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";

const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize}px;
  width: 35rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.fontSize + 4}px;
`;

const ContentContainer = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;
  line-height: ${(props) => (props.spaced ? "3rem" : "none")};
`;

const Main = styled.main`
  padding-top: 2rem;
`;

function App() {
  // const [theme, setTheme] = useState("light");
  // const [fontSize, setFontSize] = useState(16)

  const [state, dispatch] = useReducer(reducer, initState);

  // const themeToggle = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Toolbar
          fontIncreaseHandler={() => dispatch({ type: "FONT_INCREASE" })}
          fontDecreaseHandler={() => dispatch({ type: "FONT_DECREASE" })}
          toggleThemeHandler={() => dispatch({ type: "TOGGLE_DARK" })}
          toggleSpacedHandler={() => dispatch({ type: "TOGGLE_SPACED" })}
          themeState={state.theme}
          spacedState={state.spaced}
        />
        <Main>
          <h1>Welcome</h1>
          <button onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
            {state.theme} Mode
          </button>
          {/* <div>
          <button onClick={() => dispatch({ type: "FONT_INCREASE" })}>
            Larger
          </button>
          <button onClick={() => dispatch({ type: "FONT_DECREASE" })}>
            Smaller
          </button>
        </div> */}
          <ContentContainer spaced={state.spaced}>
            <Title fontSize={state.fontSize}>CONTENT TITLE</Title>
            <Paragraph fontSize={state.fontSize}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed
              perferendis iure quae modi eaque a magni porro enim iusto minus
              esse officia eos officiis et saepe est consequuntur fuga. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
              vero consectetur architecto magnam laudantium mollitia
              necessitatibus quas et, qui facilis repellendus porro error,
              quaerat eos labore dolores deleniti adipisci! Nobis.
            </Paragraph>
          </ContentContainer>
          <ContentContainer fontSize={state.fontSize}>
            <Title>CONTENT TITLE</Title>
            <Paragraph fontSize={state.fontSize}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              fugit, dolore soluta tempora, veniam voluptatem quae aspernatur
              sequi, quas recusandae perferendis provident suscipit repellendus
              labore aut culpa vitae voluptatibus ratione!
            </Paragraph>
          </ContentContainer>
        </Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
