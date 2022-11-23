import "bootstrap/dist/css/bootstrap.css";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Group from "./main/Main";
import { useEffect, useState } from "react";

function App() {
  const [apiList, setApiList] = useState([]);
  const [addnum, setAddnum] = useState(6);
  const [menuOption, setMenuOption] = useState([]);
  const api = async () => {
    let response = await fetch(
      `https://api.odcloud.kr/api/15103411/v1/uddi:efd2cc22-353c-47f0-83e5-abc6dca54f6f?page=1&perPage=${addnum}&serviceKey=u4fYi1HGYU9hSz8WINOWYKy2JYZ3hkboNiVoSu5tIOqSGvAJEUOJutQfg8WuE7S2uf0RRdWGMK6OrhwL1ijZ3g%3D%3D`
    );
    let data = await response.json();
    setApiList(data.data);
  };
  // 버튼을 클릭했을때 useState값을 변경시켜서
  useEffect(() => {
    api();
  }, [addnum]);

  const addData = () => {
    let copy = addnum;
    setAddnum(copy + 6);
  };

  return (
    <div className="App">
      <Header
        apiList={apiList}
        setAddnum={setAddnum}
        setApiList={setApiList}
        setMenuOption={setMenuOption}
        menuOption={menuOption}
      ></Header>
      <Group
        apiList={apiList}
        addData={addData}
        menuOption={menuOption}
      ></Group>
      <Nav></Nav>
    </div>
  );
}

export default App;
