import React from "react";
import "./App.css";
import img from "./images/image.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "yellowgreen" }}
            >
                UD COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1> Hello World my Name is Kaleb Hannan</h1>
            <img src={img} alt="A picture of a road" height={200} width={200} />
            <ul>
                <li>apples</li>
                <li>oranges</li>
                <li>bananas</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
