import "bootstrap/dist/css/bootstrap.css";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Group from "./main/Main";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <Group></Group>
            <Nav></Nav>
            
        </div>
    );
}

export default App;
