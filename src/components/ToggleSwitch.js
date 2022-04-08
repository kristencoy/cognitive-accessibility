import styled from "styled-components";

function ToggleSwitch(props) {
  const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
  `;

  const Switch = styled.div`
    width: 60px;
    height: 32px;
    background-color: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;
    &:before {
      transition: 300ms all;
      content: "";
      position: absolute;
      width: 28px;
      height: 28px;
      border-radius: 35px;
      top: 50%;
      left: 4px;
      background-color: white;
      transform: translate(0, -50%);
    }
  `;
  const Input = styled.input`
    opacity: 0;
    position: absolute;
    &:checked + ${Switch} {
      background-color: green;

      &:before {
        transform: translate(32px, -50%);
      }
    }
  `;

  return (
    <Label>
      <Input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <Switch />
    </Label>
  );
}

export default ToggleSwitch;
