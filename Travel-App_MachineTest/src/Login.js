
import { useState,useEffect 
} from "react"
import axios from 'axios';
import img from './login-img.jpg'
import img2 from './login-img2.png'
import img3 from './img-3.jpg'
import {useNavigate} from 'react-router-dom'
function Login(){
    localStorage.clear()
    return(<>
        <h1> Please login</h1>
        <MyForm />
        
        </>)
        
        
        }
        function MyForm(props){

            // const navigate= useNavigate()
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
   
    .post(`http://localhost:3002/login/`,inputs)
        .then(response => {
            // console.log("promise was fulffiled")
            // console.log(response);
            localStorage.setItem('mytoken',
           response.data.accessToken);
           window.location = '/TravelRequest'
        })
        .catch (error=>{
            localStorage.clear();
            if(error.response){
                alert(error.response.data)
            }
        })

//         })


}

var signin={
    
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:50,
        paddingBottom:50
    
}
return(
    
    
    <>
    <div className="login-img"  style={{ backgroundImage: `url(${img3})` }}>
     <center>
     <h2> Login Form</h2>
     </center>
     {/* <div className="login-img"  style={{ backgroundImage: `url(${img})` }}> */}
    <form  style ={signin} onSubmit = {handleSubmit}>

     <span className="login-label"><label> Enter email: </label>
    <input type =" text" name ="email"
    value = {inputs.email || ""}
    onChange={handleChange}/> <br/> <br/>
    <br/>

    <label> Enter the Password: </label>
    <input type = "password" name ="password"
     value = {inputs.password|| ""}
     onChange={handleChange}/>  <br/>
<br/> <br/>
</span>
   <input type = "submit"/> 

</form>
</div>
</>
)
}

    


export default Login