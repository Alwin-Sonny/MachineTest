
import { useState,useEffect 
} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import img3 from './img-3.jpg'
function Registration(){
    return(<>
        <h1> Please Register Here</h1>
        <MyForm />
        
        </>)
        
        
        }
        function MyForm(props){

            const navigate= useNavigate()
        const[inputs,setInputs] = useState({});
        
      
    //initialize to empty 

    
    function handleChange(event)
{   //saving the name of the elemnt and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values
    setInputs(values => ({...values, [name]:value}))

}
function handleSubmit(event){
    // localStorage.clear();
    //to prevent teh default submit behaviour
    event.preventDefault();
    //printing teh values to the console
    console.log(inputs);
    axios
    // .put(`http://localhost:3002/staff/${props.id}`,inputs) //Working json Server
    .post(`http://localhost:5000/employees/`,inputs)
        .then(response => {
            console.log("promise was fulffiled")
            console.log(response);
        //     localStorage.setItem('mytoken',
        //    response.data[0].accessToken);
           window.location = '/Login'
        })
        .catch (error=>{
            localStorage.clear();
            if(error.response){
                alert(error.response.data)
            }
        })
// // local storage getter
// console.log(localStorage.getItem('mytoken'));
// // local storage remove
// //localStorage.removeItem('mytoken');
// // local storage remove all
// //localStorage.clear();
//         //    alert("user details updated")
//        if (localStorage.getItem('mytoken')==='undefined') {
//             localStorage.clear();
//             alert("Cannot Login. Please try again")
//             } else {
//             navigate(`/StaffList`)
//             }
//         })


}

var signin={
    
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    
}
return(
    
    
    <>
     <div className="login-img"  style={{ backgroundImage: `url(${img3})` }}>
     <center>
     <h2> Registration  Form</h2>
     </center>
    
    <form  style ={signin} onSubmit = {handleSubmit}>

    <label> Enter  first Name: </label>
    <input type =" text" name ="first_name"
    value = {inputs.first_name || ""}
    onChange={handleChange}/> <br/>

<label> Enter Last Name: </label>
    <input type = "text" name ="last_name"
    value = {inputs.last_name || ""}
    onChange={handleChange}/> <br/>

<label> age: </label>
    <input type = "number" name ="age"
    value = {inputs.age || ""}
    onChange={handleChange}/> <br/>

     <label> gender: </label>
    <input type ="text" name ="gender"
    value = {inputs.gender || ""}
    onChange={handleChange}/> <br/>

<label> address: </label>
    <input type ="text" name ="address"
    value = {inputs.address || ""}
    onChange={handleChange}/> <br/>

<label> phone_number: </label>
    <input type ="text" name ="phone_number"
    value = {inputs.phone_number|| ""}
    onChange={handleChange}/> <br/>

 


   <input type = "submit"/> 
</form>
</div>
</>
)
}

    


export default Registration