import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColorIndex(colorIndex + (1 % COLORS.length))}>
            Next Color
        </Button>
    );
}

function ColorPreview(): JSX.Element {
    return (
        <div
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}