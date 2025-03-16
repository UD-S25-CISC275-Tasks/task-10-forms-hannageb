import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "Pink",
    "Red",
    "Purple",
    "Cyan",
    "Blue",
    "Violet",
    "Lime",
    "Tomato",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]); // Initial color set to first item

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colours"
                    value={c}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                    label={c}
                />
            ))}
            You have chosen
            <span
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                }}
            >
                {color}
            </span>
        </div>
    );
}
