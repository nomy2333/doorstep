import React, { useState, useEffect } from 'react';
import Data from '../testdata';
import { Row, Col } from 'react-bootstrap';
import EachExperiment from '../components/eachexperiment';
import axios from 'axios';

const DisplayPage = () => {
    const [experiments, setExperiments] = useState([])
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://127.0.0.1:8000/db')
            setExperiments(data)
        }

        fetchData()
    }, [])
    // const experiments=Data;
    return (
        <div>
            <h1>experiments information</h1>
            <Row>
                {experiments.map(each => (
                    <Row key={each._id} sm={12} md={6} lg={4} xl={3}>

                        <EachExperiment item={each} />
                    </Row>
                ))}

            </Row>
        </div>
    );
};

export default DisplayPage;