import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">AI Generated Images Of Me</header>
            <img
                src={require("./images/charcoal.png")}
                alt="AI Generated charcoal image of me"
            />
            <p>Hello World, Troy Schotter following tutorial for COS420</p>
        </div>
    );
}

export default App;
