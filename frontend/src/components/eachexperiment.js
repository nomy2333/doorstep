import React from 'react';
import { Card } from 'react-bootstrap';

const EachExperiment = ({ item }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Body>
                <a href="#">
                    <Card.Title>{item.name}</Card.Title>
                </a>
            </Card.Body>
            <Card.Text as='div'>
                <div className="my-3">
                    {item.email}
                </div>
            </Card.Text>
            <Card.Text as='div'>
                <div className="my-3">
                    {item.phone}
                </div>
            </Card.Text>
            {/* {item._id} */}
        </Card>
    );
};

export default EachExperiment;