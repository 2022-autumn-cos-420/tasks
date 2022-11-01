import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function switchtype(): void {
        setQuestionType(
            qType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <>
            <div>
                <Button onClick={switchtype}>Change Type</Button>
            </div>
            <div>
                {qType === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </>
    );
}
