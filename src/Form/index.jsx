import React from 'react';
import { useState } from 'react/cjs/react.development';
import cl from "./style.module.css"

const MyForm = ({ values: [callback, array], children }) => {

    const [inputValue, setInputValue] = useState({ text: "", visitor: "" });

    const publishComment = (e) => {
        e.preventDefault();
        if (!inputValue.text) return;
        callback([...array, inputValue]);
        setInputValue({ text: "", visitor: "" });
    }

    const saveInputValue = (e, field) => {
        setInputValue({...inputValue, [field]: e.target.value});
    }

    return (
        <form className={cl.form} action="">
            <h1>{children}</h1>
            <div>
                <input
                    value={inputValue.text}
                    type="text"
                    placeholder="enter wishes please"
                    onChange={(e) => saveInputValue(e, "text")}
                />
                <input type="text"
                    value={inputValue.visitor}
                    placeholder="enter your name"
                    onChange={(e) => saveInputValue(e, "visitor")}
                />
                <button onClick={publishComment}>Publish</button>
            </div>
        </form>
    )
}

export default MyForm;