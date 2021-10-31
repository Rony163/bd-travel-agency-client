import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Events from '../Events/Events';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        fetch('https://enigmatic-refuge-81608.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [status, events])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want a delete?');
        if (proceed) {
            const url = `https://enigmatic-refuge-81608.herokuapp.com/events/${id}`;
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

    const handleSuccess = id => {
        setStatus(!status);
        const url = `https://enigmatic-refuge-81608.herokuapp.com/events/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Update succesfully.')
                }
                else {
                    alert('Already Approved')
                }
            })
    }

    return (
        <div>
            {events.length ?
                <div className="mt-5">
                    <h1 className="text-info pt-2">All Events List</h1>
                    <Row xs={1} md={3} className="g-4 m-2">
                        {
                            events.map(event => <Events
                                key={event._id}
                                event={event}
                                handleDelete={handleDelete}
                                handleSuccess={handleSuccess}
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