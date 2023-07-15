import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    // const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const handleUpClick = () => {
        // console.log('Uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log('Uppercase was clicked ' + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value)
    }
    const handleToClear = () => {
        // console.log('On change');
        let newText = ""
        setText(newText)
    }
    // const handleTextAreaClick = () => {
    //     setIsPlaceholderVisible(false);
    // };

    // text = "new text"; //Wrong way to change the state
    // setText('new text');//correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox">Enter your text:</label> */}
                    <textarea className="form-control" placeholder='Enter your text...' value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#3e4040' : 'white' }} id="myBox" rows="8"></textarea>
                    {/* {isPlaceholderVisible && <div className="placeholder">Placeholder Text</div>} */}
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleToClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} MInutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}