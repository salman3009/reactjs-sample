
import {useState} from 'react';
import './Table.css'
function Table(props){
    // const[getTable,setTable]=useState({
    //     fullName:"salman",
    //     age:22
    // })
    // // let fullName = "salman";
    // // let age = 22;
    // setTimeout(()=>{
    //     setTable({
    //         ...getTable,
    //         fullName:"akash",
    //         age:44
    //     })
    //       alert("setime");
    // },3000)
    return(<div>
        <table className='row'>
            <tr>
                <th>FullName</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>{props.fullName}</td>
                <td>{props.age}</td>
            </tr>
        </table>
    </div>)
}

export default Table;