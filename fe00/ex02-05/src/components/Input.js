import React, {useState} from 'react';
import './input.css'

function TodoInput ({handleInput}) {
    const [text, setText] = useState('');
    
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        handleInput(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={handleChange} placeholder="type things to do"/>
          <button className='add' type='submit' onClick={handleSubmit}>ADD</button>
        </form>
    );
}

export default TodoInput;