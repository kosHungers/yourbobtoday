import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function ToggleButtonGroupControlled() {
    const [value, setValue] = useState([1, 3]);

    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
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
                양식
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

// render(<ToggleButtonGroupControlled />);
