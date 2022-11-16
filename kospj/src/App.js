import "bootstrap/dist/css/bootstrap.css";
import Header from "./header/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="container text-center">
                <div className="row">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
        </div>
    );
}

export default App;
