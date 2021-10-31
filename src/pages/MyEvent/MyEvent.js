import { Card, Col } from 'react-bootstrap';

const MyEvent = (props) => {
    const { _id, mobile, date, person, ServiceName, status } = props.event;

    return (
        <div>
            <Col className="shadow">
                <Card>
                    <Card.Body>
                        <Card.Title>Place Name: {ServiceName}</Card.Title>
                        <p>Total Person: {person}</p>
                        <p>Phone Number: {mobile}</p>
                        <p>Journy date: {date}</p>
                        <p>Status: {status}</p>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Cancle</button>
                </Card>
            </Col>
        </div>
    );
};

export default MyEvent;