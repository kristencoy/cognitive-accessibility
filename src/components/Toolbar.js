import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

const Sidebar = styled.div`
  position: fixed;
  width: 20%;
  min-width: 10rem;
  max-width: 12rem;
  top: 0;
  left: 0;
  bottom: 0;
  border: solid;
  border-color: black;
  padding-top: 5rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.themeState === "light" ? "#eaecef" : "rgb(46, 46, 46)"};
  color: ${(props) => (props.themeState === "light" ? "black" : "white")};
`;

const FontBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FontButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
`;
function Toolbar(props) {
  return (
    <Sidebar themeState={props.themeState}>
      <h2>Toolbar</h2>
      <div>
        <label htmlFor="">increase or decrease font size</label>
        <FontBtnContainer>
          <FontButton onClick={props.fontIncreaseHandler}>Larger</FontButton>
          <FontButton onClick={props.fontDecreaseHandler}>Smaller</FontButton>
        </FontBtnContainer>
      </div>

      <h3>DARK MODE</h3>
      <ToggleSwitch
        onChange={props.toggleThemeHandler}
        checked={props.themeState === "dark" ? true : false}
      />
      <h3>SPACED</h3>
      <ToggleSwitch
        onChange={props.toggleSpacedHandler}
        checked={props.spacedState}
      />
      <h3>FILTERED</h3>
      <ToggleSwitch
        onChange={props.toggleFilteredHandler}
        checked={props.filteredState}
      />
    </Sidebar>
  );
}

export default Toolbar;
