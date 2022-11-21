import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// const Navi = () => {
//     return (
//         <nav>
//             {/* <ul>
//                 <li>
//                     <a>리뷰많은순</a>
//                 </li>
//                 <li>
//                     <a>별점순</a>
//                 </li>
//                 <li>
//                     <a>맛집추가</a>
//                 </li>
//                 <li>
//                     <a>찜 목록</a>
//                 </li>
//                 <li>
//                     <a>맨 위로</a>
//                 </li>
//             </ul> */}
//             <ColorSchemesExample></ColorSchemesExample>
//         </nav>
//     );
// };

// export default Navi;

export default function ColorSchemesExample() {
    return (
        <>
            <Navbar className="position-fixed top-0 end-0" bg="dark" variant="dark">
                <Container className="d-flex flex-column vh-100 justify-content-evenly">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ml-auto d-flex flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
