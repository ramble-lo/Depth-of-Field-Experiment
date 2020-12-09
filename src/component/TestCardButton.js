import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

function TestCardButton(props) {
    let counts = props.count;
    let setCount = props.setCount;
    console.log(counts);
   // const [count, setCount] = useState(0);
    return (
        <Button onClick={()=> setCount( counts + 1)}>{counts}</Button>
    )
}

export default TestCardButton
