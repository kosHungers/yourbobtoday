import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Col, Row, Container } from "react-bootstrap";
import ModalPage from "./modal/Modal";

function Group({ apiList, menuOption }) {
  console.log('데이터입니다',apiList);
  if (!!menuOption.length) {
    return (
      <Container>
        <Row>
          {apiList.map((data) => {
            if (menuOption.includes(data.업태)) {
              return (
                <Col key={data.연번} sm={4} menuoption={data["업태"]}>
                  <CardGroup className="container fluid">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6DeJHvthgTofTk8KcN2MzhTHWijOOPZvSg&usqp=CAU"
                        // "https://w.namu.la/s/aa411ec55b7d4906fb6107bc6966e312fd6d884d5704c36a2dd46f2d183a42b52589730964984792cca317b20bd45440ad4e5fd531fd31ecc127101bd54647bcea01407e262a997892594d72862f70793e9a117e45b03ea71e093fce5bf33f4039c0f5ee8eb6d476aa53cb4f533046c1"
                      />
                      <Card.Body>
                        <Card.Title>{data["업 소 명"]}</Card.Title>
                        <Card.Text>{data["소재지"]}</Card.Text>
                        <ModalPage data={data}/>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{data["전화번호"]}</small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          {apiList.map((data) => {
            return (
              
              <Col key={data["연번"]} sm={4} menuoption={data["업태"]}>
                <CardGroup className="container fluid">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6DeJHvthgTofTk8KcN2MzhTHWijOOPZvSg&usqp=CAU"
                      // "https://w.namu.la/s/aa411ec55b7d4906fb6107bc6966e312fd6d884d5704c36a2dd46f2d183a42b52589730964984792cca317b20bd45440ad4e5fd531fd31ecc127101bd54647bcea01407e262a997892594d72862f70793e9a117e45b03ea71e093fce5bf33f4039c0f5ee8eb6d476aa53cb4f533046c1"
                    />
                    <Card.Body>
                      <Card.Title>{data["업 소 명"]}</Card.Title>
                      <Card.Text>{data["소재지"]}</Card.Text>
                      <ModalPage data={data}/>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{data["전화번호"]}</small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
              
            );
          })}
        </Row>
      </Container>
    );
  }
}
// ~~~~?q=''
export default Group;
