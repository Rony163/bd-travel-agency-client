import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import MyEvent from '../MyEvent/MyEvent';

const MyEvents = () => {
    const { user } = useFirebase();
    const [events, setEvents] = useState([]);
    const [matchEvent, setMatchEvent] = useState([]);

    // This is for load the data
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    // This is for match the data
    useEffect(() => {
        setMatchEvent(events.filter(event => event.email === user?.email))
    }, [events, user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want a delete?');
        if (proceed) {
            const url = `http://localhost:5000/events/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Succesfuly deleted');
                        const remaining = events.filter(event => event._id !== id);
                        setEvents(remaining);
                    }
                })
        }
    }

    return (
        <Row xs={1} md={3} className="g-4 m-2 mt-5">
            {
                matchEvent.map(event => <MyEvent
                    key={event._id}
                    event={event}
                    handleDelete={handleDelete}
                >
                </MyEvent>)
            }
        </Row >
    );
};

export default MyEvents;