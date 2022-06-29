import { useState } from "react";

const Form = (props) =>{
    console.log(props);
const fromParent = props.parentChild
const secondElement = props.secondData;
const [name,changeName] = useState('')
const [submitName, channgedSubmitName] = useState('');

const nameHandler = (event) => {
    changeName(event.target.value)
    
}
const submitHandler = (event) => {
    event.preventDefault();
    channgedSubmitName("This is from Form.js: "+ name);
    props.transferValue(name);
}
    return(
        <form onSubmit = {submitHandler}> 
            <p>{fromParent}</p>
            <p>{secondElement}</p>
            <label>Name: </label>
            <input onChange = {nameHandler} value = {name}></input>
            <button>Enter</button>
            <p>{submitName}</p>
            
        </form>
    )
}
export default Form;