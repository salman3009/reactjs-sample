
import './Form.css';
import {useState} from 'react';
function Form(){

      const[getForm,setForm]  = useState({
                       fullName:'salman',
                       age:22
                   })
       //getForm will provide you latest data
       //setForm will update the data 
    

    const onSubmitHandler=()=>{
        alert("submit");
    }
    
    const OnChangeHandler=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        setForm({...getForm,[event.target.name]:event.target.value})
    }

    return(<div>
        
        <div className="box">Application Form -{getForm.fullName}</div>
        <div className="formBox">
            FullName:<input  value={getForm.fullName} onChange={OnChangeHandler} type="text" name="fullName"/>
        </div>
        <div className="formBox">
            Age:<input type="text" value={getForm.age} onChange={OnChangeHandler} name="age"/>
        </div>
        <div className="formBox">
            <button onClick={onSubmitHandler}>Submit</button>
        </div>
        
        </div>)
}

export default Form;