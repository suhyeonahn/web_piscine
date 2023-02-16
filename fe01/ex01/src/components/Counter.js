import React, {useState} from 'react';

function Counter() {

    const [num, setNum] = useState(0);

    const handleChange = (e) => {
        setNum(e.target.value);
    };

    const handlePlus = () => {

        setNum(Number(num) + 1);
    };

    const handleMinus = () => {

        setNum(Number(num) - 1);
    };

    return (
        <>
            <input type='number' value={num} onChange={handleChange}></input>
            <button onClick={handlePlus}>+1</button>
            <button onClick={handleMinus}>-1</button>
            <p>{num}</p>
        </>
    );
}

export default Counter;