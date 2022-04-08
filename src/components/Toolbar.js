import styled from "styled-components";

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
  `;

  const ToggleSwitch = styled.input``;

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
        <input type="checkbox" onChange={props.toggleThemeHandler} />
      </div>
    </Sidebar>
  );
}

export default Toolbar;
