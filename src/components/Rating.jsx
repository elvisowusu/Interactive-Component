import React,{useState} from "react";
import '../styles/Rating.css'
import {AiFillStar} from 'react-icons/ai'


export const Rating =({rate,setRate,finish,setFinish}) => {
   const [activeOption,setActiveOption]=useState(null);
   const [click,setClick] = useState(false)
   const [errorMessage,setErrorMessage]=useState('')

    const handleClickEvent=(value)=>{
        setActiveOption(value);
        setRate(value);
        setClick(true);
        setErrorMessage("");
    };

    const proceed =()=>{
        if (click){
            {setFinish(true)}
        }else{
            setErrorMessage ("Select an option to proceed");
        }
    }


    const getOptionStyle =(optionValue)=>{
        return optionValue ===activeOption ? {backgroundColor: '#a6a9af ',color:'white'}:{};
    };



    return(
        <div className="main">
       <div className="top">
        < AiFillStar className="starIcon"/>
       </div>
       <div className="middle">
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       </div>
       <div className="bottom">
        <button style={getOptionStyle(1)} className="options"onClick={()=>handleClickEvent(1)}>1</button>
        <button style={getOptionStyle(2)} className="options"onClick={()=>handleClickEvent(2)}>2</button>
        <button style={getOptionStyle(3)} className="options"onClick={()=>handleClickEvent(3)}>3</button>
        <button style={getOptionStyle(4)} className="options"onClick={()=>handleClickEvent(4)}>4</button>
        <button style={getOptionStyle(5)} className="options"onClick={()=>handleClickEvent(5)}>5</button>
       </div>
       {errorMessage && <div className="errorMessage">{errorMessage}</div>}
       <button  className="submit" onClick={proceed}>SUBMIT</button>
    </div>
    );
};





    // const handleClickEvent=(prop)=>{
    //     setRate(rate=(prop.n))
    // }
{/* <button className="options"onClick={()=>handleClickEvent({n:1})}>1</button>
<button className="options"onClick={()=>handleClickEvent({n:2})}>2</button>
<button className="options"onClick={()=>handleClickEvent({n:3})}>3</button>
<button className="options"onClick={()=>handleClickEvent({n:4})}>4</button>
<button className="options"onClick={()=>handleClickEvent({n:5})}>5</button> */}