import React from "react";
import "./App.css";
import img from "./Images/image.jpg";

import { Row, Col, Button, Container } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript Hello World
            </header>
            <span style={{ color: "red" }}>
                <h1>This is header text</h1>;
            </span>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <img src={img} alt="screenshot of assignment1" />
            Unordered List:
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. shashank chintakuntla
            </p>
        </div>
    );
}

export default App;
