import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎅🏻" | "🎃" | "🎆" | "🦃" | "💟";
const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
    "🎅🏻": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "💟",
    "💟": "🎅🏻"
};

const HOLIDAY_YEAR: Record<Holiday, Holiday> = {
    "💟": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎅🏻",
    "🎅🏻": "💟"
};
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setHoliday] = useState<Holiday>("🎅🏻");

    function AlphabetAdvance(): void {
        const newHoliday = HOLIDAY_ALPHABET[currentHoliday];
        setHoliday(newHoliday);
    }

    function YearAdvance(): void {
        const newHoliday = HOLIDAY_YEAR[currentHoliday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {currentHoliday}</span>
            <Button onClick={AlphabetAdvance}>Advance by Alphabet</Button>
            <Button onClick={YearAdvance}>Advance by Year</Button>
        </div>
    );
}
