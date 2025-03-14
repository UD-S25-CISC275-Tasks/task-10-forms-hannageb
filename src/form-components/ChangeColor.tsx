import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "Pink",
    "Red",
    "Purple",
    "Cyan",
    "Blue",
    "Lilac",
    "Lime",
    "Dandelion",
];

export function ChangeColor(): React.JSX.Element {
    const [color] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Select value={color} onChange={ChangeColor}>
                    {COLORS.map((c: string) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
