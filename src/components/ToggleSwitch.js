import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;
`;

const Switch = styled.div`
  width: 4.25rem;
  height: 2rem;
  cursor: pointer;
  background-color: #b3b3b3;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  padding: 0.13rem;
  margin: 0 auto;
  position: relative;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    margin: auto;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 35px;
    /* top: 50%; */
    left: 4px;
    background-color: white;
    /* transform: translate(0, -50%); */
  }
`;
const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background-color: green;

    &:before {
      /* transform: translate(32px, -50%); */
      transform: translate(32px, 0);
    }
  }
`;

function ToggleSwitch(props) {
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
