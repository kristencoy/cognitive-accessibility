import "./App.css";
import { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import styled from "styled-components";
import { initState, reducer } from "./store/reducer";
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize}px;
  width: 35rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.fontSize + 4}px;
`;

const PageTitle = styled.h1`
  font-size: ${(props) => props.fontSize + 12}px;
  font-weight: 400;
  padding-top: 2rem;
  padding-left: 1.5rem;
  justify-self: start;
`;

const ContentContainer = styled.div`
  margin-bottom: 1rem;

  margin-top: 2rem;
  padding-left: 3rem;
  line-height: ${(props) => (props.spaced ? "3" : "1.5")};
`;

const Main = styled.main`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 80vw;
  padding-left: 20rem;
  padding-bottom: 6rem;
`;

const PageTitleContainer = styled.div`
  width: 35rem;
`;

const Img = styled.img`
  max-width: 500px;
  max-height: 400px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: ${(props) => (props.filtered ? "none" : "block")};
`;

const w3Link = (
  <a href="https://www.w3.org/WAI/WCAG21/Understanding/adaptable">
    Guideline 1.3
  </a>
);

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
      <Container className="App">
        <Navbar filtered={state.filtered} />
        <Toolbar
          fontIncreaseHandler={() => dispatch({ type: "FONT_INCREASE" })}
          fontDecreaseHandler={() => dispatch({ type: "FONT_DECREASE" })}
          toggleThemeHandler={() => dispatch({ type: "TOGGLE_DARK" })}
          toggleSpacedHandler={() => dispatch({ type: "TOGGLE_SPACED" })}
          toggleFilteredHandler={() => dispatch({ type: "TOGGLE_FILTERED" })}
          themeState={state.theme}
          spacedState={state.spaced}
          filteredState={state.filtered}
        />
        <Main>
          <PageTitleContainer>
            <PageTitle fontSize={state.fontSize}>
              Cognitive Accessibility
            </PageTitle>
          </PageTitleContainer>
          {/* <button onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
            {state.theme} Mode
          </button> */}
          {/* <div>
          <button onClick={() => dispatch({ type: "FONT_INCREASE" })}>
            Larger
          </button>
          <button onClick={() => dispatch({ type: "FONT_DECREASE" })}>
            Smaller
          </button>
        </div> */}
          <ContentContainer spaced={state.spaced}>
            <Title fontSize={state.fontSize}>
              What is CD, and why does it matter?
            </Title>
            <Paragraph fontSize={state.fontSize}>
              Cognitive disability is an umbrella term used to describe any
              level of deficit with regards to executive functioning. Some
              examples include dementia, memory impairment, ADD/ADHD, autism,
              sensory processing disorder, dyslexia, and so on. These diagnoses,
              whether permanent or temporary, often result in difficulty with
              attention, memory, processing speed, time management, language
              processing, symbol interpretation, math, and decision making.
            </Paragraph>
            <Img
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              alt="human brain"
              filtered={state.filtered}
            />
            <Paragraph fontSize={state.fontSize}>
              Just as these deficits can impair one's daily functional
              abilities, so too can they impair one's ability to interact with
              and utilize content on the web. As the standard interface with
              businesses, government, banking, and more moves towards being
              primarily web-based, content creators need to be aware of the need
              for accessible design to prevent barriers to access for those with
              cognitive disability or deficits.
            </Paragraph>
          </ContentContainer>
          <ContentContainer spaced={state.spaced}>
            <Title fontSize={state.fontSize}>WCAG Guidelines</Title>
            <Paragraph fontSize={state.fontSize}>
              The WCAG, or Web Content Accessibility Guidelines, addresses a
              number of methods that can be used to improve cognitive
              accessibility. One such guideline, {w3Link}, suggests that
              information should be presented in a way that is{" "}
              <strong>adaptable</strong>. Information should be able to be
              translated in such a way that it is perceivable to people of
              varying abilities without losing basic information or structure.
            </Paragraph>
            <Img
              src="https://images.unsplash.com/photo-1584984793889-6ac1bbe1a2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              alt="older gentleman using iPhone"
              filtered={state.filtered}
            />
            <Paragraph fontSize={state.fontSize}>
              Allowing users to personalize their interaction with a webpage
              allows for individual preferences and abilities without
              sacrificing page content due to high design specificity. The
              toolbar embedded in this page puts personalization and
              adaptability into the users' hands, with the end goal of creating
              a more accessible web. Features include font-size controls,
              light/dark mode, option to increase spacing between lines
            </Paragraph>
          </ContentContainer>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
