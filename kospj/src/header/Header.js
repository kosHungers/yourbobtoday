import Button from "./button/Button";

function Header() {
    return (
        <header>
            <h1>부평 맛집 찾는 어플리케이션</h1>
            <article class="search-bar">
                <h2>검색창</h2>
                <input type="text" />
                <button type="button">매그니파이어</button>
                <div class="category">
                    <Button></Button>
                    {/* <label for="all">
                        {" "}
                        <input id="all" type="checkbox" />
                    </label>
                    <label for="kor">
                        {" "}
                        <input id="kor" type="checkbox" hidden />
                    </label>
                    <label for="jpn">
                        {" "}
                        <input id="jpn" type="checkbox" hidden />
                    </label>
                    <label for="wst">
                        {" "}
                        <input id="wst" type="checkbox" hidden />
                    </label>
                    <label for="chn">
                        {" "}
                        <input id="chn" type="checkbox" hidden />
                    </label> */}
                </div>
            </article>
        </header>
    );
}

export default Header;
