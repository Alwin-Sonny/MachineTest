// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router,Routes,Route,Link}
 from "react-router-dom"
//importing all the componennts
import './Nav.css'
import Home from './Home.js';
// import About from "./About";


import NoMatch from "./NoMatch.js";
import Login from "./Login";
import Resgistration from "./UserRegistration";
import TravelRequest from "./TravelRequest";


function App(){
    return(<>
    <MyRouter/>
            </>
    );
}

function MyRouter(){
    return(
<>
        <Router>
            <div id ="body">
           <h1 id ="App"><i> Travel Management System</i></h1>

       <ul id ="nav"> 
       <div id = "nav1">
       <div className ="app"> <Link to ="/">  Home</Link> </div>
       {/* <div className="app"> <Link to ="/about">  About</Link></div> */}
       <div className="app"> <Link to ="/travelreq">  Travel Request</Link></div>
      
    {!localStorage.getItem('mytoken') &&<div className ="app"> <Link to ="/registration"> Registration </Link> </div>}
    {!localStorage.getItem('mytoken')&& <div className ="app"> <Link to ="/login"> Login </Link> </div>}                                         
    {localStorage.getItem('mytoken') && <div> <Link onClick ={()=>window.location='/login'} to ="/login"><div className="app"> Logout </div></Link> </div>}
     
     </div>
   
     </ul>
        
        <Routes>
            <Route path="/" element ={<Home/>}/>
            {/* <Route path="/about" element ={<About/>}/> */}
          
            <Route path="/registration" element ={<Resgistration/>}/>
            <Route path="/login" element ={<Login/>}/>
          
          
            <Route path="/travelreq" element ={<TravelRequest/>}/>
            <Route path="*" element ={<NoMatch/>}/>

           </Routes>

<footer>
 <h3 className ="footer-heading"> Travel Request Management System </h3>
<span className= "footer-h6">
 </span> 
<p className ="copyright">CopyRights Reserved </p>

</footer> 
</div>
        </Router>
  </>  );
}

  export default App


