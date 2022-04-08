import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

function Toolbar(props) {
  const Sidebar = styled.div`
    position: fixed;
    width: 15rem;
    top: 0;
    left: 0;
    bottom: 0;
    border: solid;
    border-color: black;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    background-color: #eaecef;
  `;

  const FontBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const FontButton = styled.button`
    padding: 10px 15px;
    cursor: pointer;
    margin: 10px;
    background-color: white;
  `;

  return (
    <Sidebar>
      <h2>Toolbar</h2>
      <div>
        <label htmlFor="">increase or decrease font size</label>
        <FontBtnContainer>
          <FontButton onClick={props.fontIncreaseHandler}>Larger</FontButton>
          <FontButton onClick={props.fontDecreaseHandler}>Smaller</FontButton>
        </FontBtnContainer>
      </div>

      <div>
        <span>Light/Dark mode</span>
        <input
          type="checkbox"
          checked={props.themeState === "dark" ? true : false}
          onChange={props.toggleThemeHandler}
        />
      </div>
      <div>
        <span>Spaced out</span>
        <input type="checkbox" onChange={props.toggleSpacedHandler} />
      </div>
      {/* <ToggleSwitch
        type="checkbox"
        onChange={props.toggleSpacedHandler}
        checked={props.spacedState ? true : false}
      /> */}
      <h2>DARK MODE</h2>
      <ToggleSwitch
        onChange={props.toggleThemeHandler}
        checked={props.themeState === "dark" ? true : false}
      />
    </Sidebar>
  );
}

export default Toolbar;
