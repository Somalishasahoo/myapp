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

   const handleClearClick =()=>{ 
    let newText='';
     setText(newText) ;  
   } 
   
   const handleUpChange =(event)=>{
    setText(event.target.value ) ; 
   }
   const handleCopy =()=>{ 
    var text1=document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
   }

  //  const handleExtraSpaces =()=>{ 
  //   console.log("inside");
  //   var newText=text.split(/[]+/);
  //   console.log(newText.join(" "));
  //   setText(newText);
    
  //  }

    const [text,setText]=useState('Enter text here');
    //   setText("new text") ;
  return (
    <>
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>
        <h4 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h4>
      <div className="mb-3">
{/* <label for ="myBox" className="form-label">Enter Text</label> */}
<textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8" 
style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}

    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
      <h4>Your Text Summary</h4>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.08*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>


    </>
  )
}

TextForm.defaultProps = {
    heading: 'hello'
    };