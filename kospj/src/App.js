import 'bootstrap/dist/css/bootstrap.css';
import Header from './header/Header';
import Nav from './nav/Nav';
import Group from './main/Main';
import { useEffect, useState } from 'react';

function App() {
  const [apiList, setApiList] = useState([]);
  const [menuOption, setMenuOption] = useState([]);
  const api = async () => {
    let response = await fetch(
      `https://api.odcloud.kr/api/15103411/v1/uddi:efd2cc22-353c-47f0-83e5-abc6dca54f6f?page=1&perPage=66&serviceKey=u4fYi1HGYU9hSz8WINOWYKy2JYZ3hkboNiVoSu5tIOqSGvAJEUOJutQfg8WuE7S2uf0RRdWGMK6OrhwL1ijZ3g%3D%3D`,
    );
    let data = await response.json();
    setApiList(data.data);
  };
  useEffect(() => {
    api();
  }, []);

  return (
    <div className="App">
      <Header
        api={api}
        apiList={apiList}
        setApiList={setApiList}
        setMenuOption={setMenuOption}
        menuOption={menuOption}
      ></Header>
      <Group apiList={apiList} menuOption={menuOption}></Group>
      <Nav></Nav>
    </div>
  );
}

export default App;
