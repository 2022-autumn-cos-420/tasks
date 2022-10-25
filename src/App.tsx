import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
<<<<<<< HEAD
                <h1>
                    UD COS420
                    <Container>
                        <Row>
                            <Col>
                                with React Hooks
                                <div
                                    id="rectangle"
                                    style={{
                                        height: "50px",
                                        width: "70px",
                                        backgroundColor: "red"
                                    }}
                                ></div>
                            </Col>

                            <Col>
                                {" "}
                                and TypeScript
                                <div
                                    id="rectangle"
                                    style={{
                                        height: "50px",
                                        width: "70px",
                                        backgroundColor: "red"
                                    }}
                                ></div>{" "}
                            </Col>
                        </Row>
                    </Container>
                    Modified by EDaran
                </h1>
                <p>Hello World</p>
=======
                UM COS420 with React Hooks and TypeScript
>>>>>>> upstream/task-arrays
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                border Activated.
            </div>
            <div>
                This is <span style={{ color: "blue" }}>blue text</span>.
            </div>
            <div>
                <img
                    src="https://umaine.edu/spa/wp-content/uploads/sites/32/2022/09/The-Melancholy-Play-Poster-V1.1.png"
                    alt="Only a few days left to see the play!"
                />
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ol>
                <li>First place</li>
                <li>Second place</li>
                <li>Third place</li>
            </ol>
        </div>
    );
}

export default App;
