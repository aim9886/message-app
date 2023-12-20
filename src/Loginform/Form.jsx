import React, {useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import Styles from "./Styles.module.css"

const Form = () => {
    let [pass, setPass]=useState(false);

    let show=()=>{
        if(!pass){
            setPass(true);
        }
        else{
            setPass(false);
        }
    }
  return (
    <section>
        <div className='mainDiv'>
<form action="">
    <div><h2>Login Form</h2></div>
<div>
    <label>NAME</label>
    <input type='text'/>
</div>
<div>
    <label>EMAIL</label>
    <input type='text'/>
</div>
<div>
    <label>PASSWORD</label>
    <div onClick={show} className={Styles.icon}>{pass ? <FaEye/> : <FiEyeOff/>}</div>
    <input type={pass ? "text": "password"}/>
</div>
<div>
    <button>SUBMIT</button>
</div>
</form>
</div>
    </section>
  )
}

export default Form