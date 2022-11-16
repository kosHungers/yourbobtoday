function Main() {
    return (
        <main>
            <ul>
                <li>카드</li>
            </ul>
            <section>
                <h2>상세 설명 모달</h2>
                <form name="myform" id="myform" method="post" action="./save">
                    <fieldset>
                        <legend>리뷰 별점</legend>
                        <label for="rate1">⭐</label>
                        <input type="radio" name="rating" value="1" id="rate1" />
                        <label for="rate2">⭐</label>
                        <input type="radio" name="rating" value="2" id="rate2" />
                        <label for="rate3">⭐</label>
                        <input type="radio" name="rating" value="3" id="rate3" />
                        <label for="rate4">⭐</label>
                        <input type="radio" name="rating" value="4" id="rate4" />
                        <label for="rate5">⭐</label>
                        <input type="radio" name="rating" value="5" id="rate5" />
                    </fieldset>
                </form>
                <h3>식당명</h3>
                <strong>대표 메뉴 : 국밥</strong>
                <p>전화번호 : 1234</p>
                <div>맵</div>
                <form action="#">
                    <textarea name="리뷰" id="" cols="30" rows="3"></textarea>
                    <button type="submit">제출</button>
                </form>
            </section>
        </main>
    );
}
