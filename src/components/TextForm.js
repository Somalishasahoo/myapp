import React,{useState} from 'react'

export default function TextForm(props) {
   const handleUpClick =()=>{ 
    let newText=text.toUpperCase();
     setText(newText) ; 
   }
   const handleLowClick =()=>{ 
    let newText=text.toLowerCase();
     setText(newText) ; 
   }
   
   const handleUpChange =(event)=>{
    setText(event.target.value ) ; 
   }

    const [text,setText]=useState('Enter text here');
    //   setText("new text") ;
  return (
    <>
    <div>
        <h4>{props.heading}</h4>
      <div className="mb-3">
{/* <label for ="myBox" className="form-label">Enter Text</label> */}
<textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Conver to Lowercase</button>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.08*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>


    </>
  )
}

TextForm.defaultProps = {
    heading: 'hello'
    };