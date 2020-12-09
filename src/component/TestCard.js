import '../App.css';
import {Button, Col, Card} from 'react-bootstrap';
// import React, { useState } from 'react';
function TestCard(props) {
    let counts = props.count
    let compList = [];
    for(let i = 1; i <= counts; i++){
        // compList.push(<Col className="p-0"  md={6}><div className="test-card">成功</div></Col>)
        compList.push(
        <Col className="mb-3" md={6} lg={4}>
            <Card >
                <Card.Img variant="top" src="https://picsum.photos/300/300" className="img-fit"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>)
    }
    return (
        compList
    )
}

export default TestCard
