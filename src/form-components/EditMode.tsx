import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [studentInfo] = useState<string>(
        "Your Name is a student");
    const [editMode] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check type="switch" checked={editMode} onChange={EditMode}/>
            {studentInfo}
        </div>
    );
}
