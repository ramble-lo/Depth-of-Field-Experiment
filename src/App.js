import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert, Button} from 'react-bootstrap';
import ImageSlider from './component/ImageSlider';
import {SliderData} from './component/SliderData';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div >
      <ImageSlider slides={SliderData}/>
    </div>
  );
}



// import TestCard from './component/TestCard';
// import TestCardButton from './component/TestCardButton';
/* <Container>
        <TestCardButton count={count} setCount={setCount}/>
        <Row>
          <TestCard count={count} />
        </Row>
        <Alert variant="succes">This is a button</Alert>
      <h1>Hello</h1>
</Container> */
export default App;
