// export default function Main() {
//     return (
//         <main>
//             <ul>
//                 <li>카드</li>
//             </ul>
//             <section>
//                 <h2>상세 설명 모달</h2>
//                 <form name="myform" id="myform" method="post" action="./save">
//                     <fieldset>
//                         <legend>리뷰 별점</legend>
//                         <label for="rate1">⭐</label>
//                         <input type="radio" name="rating" value="1" id="rate1" />
//                         <label for="rate2">⭐</label>
//                         <input type="radio" name="rating" value="2" id="rate2" />
//                         <label for="rate3">⭐</label>
//                         <input type="radio" name="rating" value="3" id="rate3" />
//                         <label for="rate4">⭐</label>
//                         <input type="radio" name="rating" value="4" id="rate4" />
//                         <label for="rate5">⭐</label>
//                         <input type="radio" name="rating" value="5" id="rate5" />
//                     </fieldset>
//                 </form>
//                 <h3>식당명</h3>
//                 <strong>대표 메뉴 : 국밥</strong>
//                 <p>전화번호 : 1234</p>
//                 <div>맵</div>
//                 <form action="#">
//                     <textarea name="리뷰" id="" cols="30" rows="3"></textarea>
//                     <button type="submit">제출</button>
//                 </form>
//             </section>
//         </main>
//     );
// }

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Group() {
    return (
        <CardGroup className="container fluid">
            <Card>
                <Card.Img
                    variant="top"
                    src="https://w.namu.la/s/aa411ec55b7d4906fb6107bc6966e312fd6d884d5704c36a2dd46f2d183a42b52589730964984792cca317b20bd45440ad4e5fd531fd31ecc127101bd54647bcea01407e262a997892594d72862f70793e9a117e45b03ea71e093fce5bf33f4039c0f5ee8eb6d476aa53cb4f533046c1"
                />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://w.namu.la/s/aa411ec55b7d4906fb6107bc6966e312fd6d884d5704c36a2dd46f2d183a42b52589730964984792cca317b20bd45440ad4e5fd531fd31ecc127101bd54647bcea01407e262a997892594d72862f70793e9a117e45b03ea71e093fce5bf33f4039c0f5ee8eb6d476aa53cb4f533046c1"
                />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://w.namu.la/s/aa411ec55b7d4906fb6107bc6966e312fd6d884d5704c36a2dd46f2d183a42b52589730964984792cca317b20bd45440ad4e5fd531fd31ecc127101bd54647bcea01407e262a997892594d72862f70793e9a117e45b03ea71e093fce5bf33f4039c0f5ee8eb6d476aa53cb4f533046c1"
                />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default Group;
