import Button from './button/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './search/Search';

function Header({ apiList, setApiList, setMenuOption, menuOption, api }) {
  return (
    <header className="d-flex flex-row justify-content-center">
      <h1 className="visually-hidden">부평 맛집 찾는 어플리케이션</h1>
      <article className="search-bar">
        <h2 className="visually-hidden">검색창</h2>
        <Search apiList={apiList} setApiList={setApiList} api={api} />
        {/* <input type="text" />
                <button type="button">매그니파이어</button> */}
        <div className="category">
          <Button setMenuOption={setMenuOption} menuOption={menuOption}></Button>
          {/* <label for="all">
                        {" "}
                        <input id="all" type="checkbox" />
                    </label>
                    <label for="kor">
                        {" "}
                        <input id="kor" type="checkbox" hidden />
                    </label>
                    <label for="chn">
                        {" "}
                        <input id="chn" type="checkbox" hidden />
                    </label>
                    <label for="jpn">
                        {" "}
                        <input id="jpn" type="checkbox" hidden />
                    </label>
                    <label for="wst">
                        {" "}
                        <input id="wst" type="checkbox" hidden />
                    </label>
                     */}
        </div>
      </article>
    </header>
  );
}

export default Header;
