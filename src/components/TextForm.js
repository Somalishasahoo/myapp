import React,{useState} from 'react'

export default function TextForm(props) {
   const handleUpClick =()=>{ 
    let newText=text.toUpperCase();
     setText(newText) ; 
   }
   
   const handleUpChange =(event)=>{
    setText(event.target.value ) ; 
   }

    const [text,setText]=useState('Enter text here');
    //   setText("new text") ;
  return (
    <div>
        <h4>{props.heading}</h4>
      <div className="mb-3">
{/* <label for ="myBox" className="form-label">Enter Text</label> */}
<textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Conver to Uppercase</button>
    </div>
  )
}

TextForm.defaultProps = {
    heading: 'hello'
    };