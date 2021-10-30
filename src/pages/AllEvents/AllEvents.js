import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Events from '../Events/Events';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <Row xs={1} md={3} className="g-4 m-2 mt-5">
            {
                events.map(event => <Events
                    key={event._id}
                    event={event}
                ></Events>)
            }
        </Row >
    );
};

export default AllEvents;