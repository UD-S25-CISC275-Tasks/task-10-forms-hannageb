import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**
 * You will need state to handle the component being in “edit mode”, the user’s name, and whether or not the user is a student.
 * The state of “edit mode” should be controlled by a switch (not a button or checkbox).
 * Initially, the component is NOT in edit mode, the user’s name is literally the string Your Name (as in, that exact string, not your actual name), and the user IS a student.
 * When not in edit mode, the text of the component must include Your Name is a student or Your Name is not a student.
 * As another example, if the user entered their name as Charles Babbage and said they were NOT a student, then the text would be Charles Babbage is not a student.
 * Whether or not the user is a student should be controlled by a regular checkbox, not a switch or button
 */

/**
 * fails the following tests:
 * Editing the name and student status changes the text &
 * Different name, click student box twice changes the text
 */

export function EditMode(): React.JSX.Element {
    const [studentInfo, setStudentInfo] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit?"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />
            {editMode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                    <Form.Control
                        value={studentInfo}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setStudentInfo(event.target.value);
                        }}
                    />
                </div>
            )}
            {!editMode && (
                <p>
                    {studentInfo} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
        </div>
    );
}
