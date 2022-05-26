import Table from './Table';
import Form from './Form';
import {useState} from 'react';

function App(){

  const [getDetails,setDetails]=useState({
    fullName:"akash",
    age:22
  })

  const setDetailsHandler=(inputName,inputAge)=>{
        setDetails({
          ...getDetails,
          fullName:inputName,
          age:inputAge
        })
  }


   return (<div>
     <Table fullName={getDetails.fullName} age={getDetails.age}/>
     <Form callDetails={(input,age)=>setDetailsHandler(input,age)}/>
   </div>)
}

export default App;