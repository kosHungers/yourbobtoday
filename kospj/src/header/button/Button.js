import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        한식
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        중식
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        일식
      </ToggleButton>
      <ToggleButton id="tbg-btn-4" value={4}>
        양식
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
// function TypeButton(){
//   const
// }

// export ToggleButtonGroupControlled;
/*
 * The second argument that will be passed to
 * `handleChange` from `ToggleButtonGroup`
 * is the SyntheticEvent object, but we are
 * not using it in this example so we will omit it.
 */
// render(<ToggleButtonGroupControlled />);

export default ToggleButtonGroupControlled;