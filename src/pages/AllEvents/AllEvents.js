import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Events from '../Events/Events';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

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
        <div>
            {events.length ?
                <div>
                    <Row xs={1} md={3} className="g-4 m-2 mt-5">
                        {
                            events.map(event => <Events
                                key={event._id}
                                event={event}
                                handleDelete={handleDelete}
                            ></Events>)
                        }
                    </Row >
                </div>
                :
                <h5 className="text-danger text-center mt-5 pt-5">There is nothing to show, please add a event first</h5>
            }
        </div>
    );
};

export default AllEvents;