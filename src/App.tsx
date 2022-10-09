import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">AI Generated Image Of Me</header>
            <div className="container">
                <div className="column">
                    <img
                        src={require("./images/charcoal.png")}
                        alt="AI Generated charcoal image of me"
                        className="Image"
                    />
                </div>
                <div className="column">
                    <ul>
                        <li>
                            Take several pictures of myself with different
                            backgrounds and different distances
                        </li>
                        <li>Convert images to a standardized size</li>
                        <li>Feed images into DreamBooth Stable Diffusion</li>
                    </ul>
                    <div>
                        <Button
                            onClick={() => {
                                alert("Jim");
                                console.log("Hello World");
                            }}
                        >
                            Click to say your name (prototype)
                        </Button>
                    </div>
                    <p>
                        Hello World, Troy Schotter following tutorial for COS420
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
