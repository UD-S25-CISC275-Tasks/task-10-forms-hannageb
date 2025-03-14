import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

/**
 * You will need a state to represent the number of attempts the user has left, and another state to represent the number of attempts they are requesting.
 * The initial number of attempts left should be 3.
 * The number of attempts left should be visible.
 * There should be a numeric input box where the user can specify their requested number of attempts.
 * There should be two buttons, one labeled use that decreases the attempts by one and one labeled gain that increases the attempts by the amount in the input box.
 * If the user attempts to request an invalid amount (e.g., the empty string "") that cannot be parsed as an integer, then do not change their number of attempts.
 * When the user is out of attempts, the use button should be disabled
 */

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts: {attempts}</p>
            <Form.Group>
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequests(isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value));
                    }}
                    disabled={attempts === 0}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={!attempts}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + requests);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
