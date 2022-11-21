import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormDisabledExample() {
    return (
        <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    {/* <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label> */}
                    <Form.Control id="disabledTextInput" placeholder="뭐 먹?" />
                </Form.Group>
                <Button type="button">Submit</Button>
            </fieldset>
        </Form>
    );
}

export default FormDisabledExample;
