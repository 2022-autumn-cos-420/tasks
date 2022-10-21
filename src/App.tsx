import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UD COS420 with React Hooks and TypeScript Modified by EDaran
                </h1>
                <p>Hello World</p>
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
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <ol>
                <li>First place</li>
                <li>Second place</li>
                <li>Third place</li>
            </ol>
        </div>
    );
}

export default App;
