
import { useState,useEffect 
} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import img3 from './img-3.jpg'
function TravelRequest(){
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
    .post(`http://localhost:5000/travels/`,inputs)
        .then(response => {
            console.log("promise was fulffiled")
            console.log(response);
        //     localStorage.setItem('mytoken',
        //    response.data[0].accessToken);
           window.location = '/ViewDetails'
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

    <label> cause_travel: </label>
    <input type ="text" name ="cause_travel"
    value = {inputs.cause_travel || ""}
    onChange={handleChange}/> <br/>

<label> Source: </label>
    <input type ="text" name ="source"
    value = {inputs.source || ""}
    onChange={handleChange}/> <br/>

<label> Destination: </label>
    <input type ="text" name ="destination"
    value = {inputs.destination || ""}
    onChange={handleChange}/> <br/>

     <label> Mode: </label>
    <input type ="text" name ="mode"
    value = {inputs.username || ""}
    onChange={handleChange}/> <br/>

    <label> fromm_date: </label>
    <input type = "date" name ="form_date"
     value = {inputs.form_data|| ""}
     onChange={handleChange}/>  <br/> 

         <label> to_date: </label>
    <input type = "date" name ="to_date"
     value = {inputs.to_date|| ""}
     onChange={handleChange}/>  <br/> 

<label> no_days: </label>
    <input type = "string" name ="no_days"
     value = {inputs.no_days || ""}
     onChange={handleChange}/>  <br/>


   <input type = "submit"/> 
</form>
</div>
</>
)
}

    


export default TravelRequest