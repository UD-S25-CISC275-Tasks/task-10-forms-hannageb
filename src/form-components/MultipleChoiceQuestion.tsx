import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select
                    value={userChoice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setUserChoice(event.target.value);
                    }}
                >
                    {options.map((o: string) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </Form.Select>
                {expectedAnswer === userChoice ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
