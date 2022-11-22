import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample({ apiList, setAddnum, setApiList }) {
  const [search, setSearch] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  return (
    <Form
      onSubmit={async () => {
        setAddnum(66);
        let List = await apiList;
        let searched = List.filter((data) => data['업 소 명'].includes(search));
        setApiList(searched);
      }}
    >
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Control id="disabledTextInput" placeholder="뭐 먹?" onChange={onChange} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default FormDisabledExample;
