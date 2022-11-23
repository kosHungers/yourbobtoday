import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

// 부트스트랩 컴포넌트
function ToggleButtonGroupControlled({ setMenuOption, menuOption }) {
  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton
        id="tbg-btn-1"
        value={1}
        onClick={() => {
          if (menuOption.includes("한식")) {
            const copy = [...menuOption];
            copy.splice(copy.indexOf("한식"), 1);
            setMenuOption(copy);
          } else {
            setMenuOption([...menuOption, "한식"]);
          }
        }}
      >
        한식
      </ToggleButton>
      <ToggleButton
        id="tbg-btn-2"
        value={2}
        onClick={() => {
          if (menuOption.includes("중식")) {
            const copy = [...menuOption];
            copy.splice(copy.indexOf("중식"), 1);
            setMenuOption(copy);
          } else {
            setMenuOption([...menuOption, "중식"]);
          }
        }}
      >
        중식
      </ToggleButton>
      <ToggleButton
        id="tbg-btn-3"
        value={3}
        onClick={() => {
          if (menuOption.includes("일식")) {
            const copy = [...menuOption];
            copy.splice(copy.indexOf("일식"), 1);
            setMenuOption(copy);
          } else {
            setMenuOption([...menuOption, "일식"]);
          }
        }}
      >
        일식
      </ToggleButton>
      <ToggleButton
        id="tbg-btn-4"
        value={4}
        onClick={() => {
          if (menuOption.includes("양식")) {
            const copy = [...menuOption];
            copy.splice(copy.indexOf("양식"), 1);
            setMenuOption(copy);
          } else {
            setMenuOption([...menuOption, "양식"]);
          }
        }}
      >
        양식
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonGroupControlled;
/*
 * The second argument that will be passed to
 * `handleChange` from `ToggleButtonGroup`
 * is the SyntheticEvent object, but we are
 * not using it in this example so we will omit it.
 */
// render(<ToggleButtonGroupControlled />);
