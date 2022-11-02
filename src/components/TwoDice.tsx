import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, rollDice1] = useState<number>(3);
    const [dice2, rollDice2] = useState<number>(4);

    function roll1(): void {
        rollDice1(d6());
    }
    function roll2(): void {
        rollDice2(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <Button onClick={roll1}>Roll Left</Button>
            <Button onClick={roll2}>Roll Right</Button>
            <span data-testid="right-die">{dice2}</span>

            {dice1 === 1 && dice2 === 1 ? <span>You Lose!</span> : ""}
            {dice1 === dice2 && dice1 !== 1 ? <span>You Win!</span> : ""}
        </div>
    );
}
