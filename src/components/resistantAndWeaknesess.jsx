import React from 'react'
import { Row } from 'react-bootstrap';

const ResistantAndWeaknesesComponent = ({value}) => {
    return (
        <Row className="pl-5">
            <ul>
            {value.map((val, i) => {
                return <li key={i}>{val}  </li>
            })}
            </ul>
        </Row>
    )
};


export default ResistantAndWeaknesesComponent;