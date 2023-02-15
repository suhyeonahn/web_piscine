import React, {useState} from 'react';

function Input() {
    const [text, setText] = useState('');
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return ;
        console.log(text);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange}></input>
            <button>click</button>
        </form>
    );
}

export default Input;