import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample({ apiList, setApiList, api }) {
  const [search, setSearch] = useState('');
  const onChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
    if (search == '') {
      api();
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        let searched = apiList.filter((data) => data['업 소 명'].includes(search));
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
