import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">AI Generated Image Of Me</header>
            <h1>Second Header</h1>

            <div className="container">
                <Row>
                    <Col>
                        <img
                            src={require("./images/charcoal.png")}
                            alt="AI Generated charcoal image of me"
                            className="Image"
                        />
                        <div className="Rectangle"></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                Take several pictures of myself with different
                                backgrounds and different distances
                            </li>
                            <li>Convert images to a standardized size</li>
                            <li>
                                Feed images into DreamBooth Stable Diffusion
                            </li>
                        </ul>
                        <div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                                aria-label="Log Hello World"
                                type="button"
                            >
                                Click to say Hello World
                            </Button>
                        </div>
                        <p>
                            Hello World, Troy Schotter following tutorial for
                            COS420
                        </p>
                        <div className="Rectangle"></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
