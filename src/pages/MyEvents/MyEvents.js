import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyEvent from '../MyEvent/MyEvent';

const MyEvents = () => {
    const { user } = useAuth();
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
        const proceed = window.confirm('Are you sure, You want cancle?');
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
        <div>
            {matchEvent.length ?
                <div className="mt-5 pt-2">
                    <h1 className="text-info">Your Events List</h1>
                    <Row xs={1} md={3} className="g-4 m-2">
                        {
                            matchEvent.map(event => <MyEvent
                                key={event._id}
                                event={event}
                                handleDelete={handleDelete}
                            >
                            </MyEvent>)
                        }
                    </Row >
                </div>
                :
                <h5 className="text-danger text-center mt-5 pt-5">There is nothing to show, please add a event first</h5>
            }
        </div>
    );
};

export default MyEvents;