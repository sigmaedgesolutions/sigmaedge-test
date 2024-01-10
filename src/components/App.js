
import '../App.css';
import { useState } from 'react';
function App() {
      const [name,setName] = useState('')
      const [nameError,setNameError] = useState('')
      const [emailError,setEmailError] =useState('')
      const [email,setEmail] = useState('')
  const onMynameChange=(e)=>{
      setName(e.target.value);
      setNameError("")
      } 
      const onMyEmailChange =(e)=>{
        setEmail(e.target.value);
        setEmailError("")
      }
      
  const handleSubmit=()=>{
      if(name==""){
        setNameError("Please enter the value")
      }
      if(email==""){
        setEmailError("Enter your email id ")
      }
    else{
      setNameError("")
      setEmailError("")
    }
     }
  return (
    
    <div className="App">
        <h3>Welcome to Sigma edge solutions</h3>   
        <div>
          <div><label>Name</label></div>
            <input 
            type='text'
            value={name}
            onChange={onMynameChange}
            />
          
            <div>
            <span>{nameError}</span>
            </div>        
        </div> 
        <div>
          <div><label>Email</label></div>
            <input 
            type='email'
            value={email}
            onChange={onMyEmailChange}
           />
           
            <div>
            <span>{emailError}</span>
            </div>        
        </div> 
        
           
    
    <button 
    onClick={handleSubmit}
     >Submit</button>
    </div>

  );
}

export default App;
