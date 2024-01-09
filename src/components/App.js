
import '../App.css';
import { useState } from 'react';
function App() {
      const [name,setName] = useState('')
      //to get the entered value
      const onMynameChange=(e)=>{
      setName(e.target.value);
      setError("")
      } 
      const [error,setError] = useState('')

      
     const handleSubmit=()=>{
      if(name==""){
        setError("Please enter the value")
      }
    else{
      setError("")
    }
     }
  return (
    <div className="App">
        <h3>Welcome to Sigma edge solutions</h3>    
    <label>Name</label>
    <input 
    type='text'
    value={name}
    onChange={onMynameChange}
    >
    </input>
    <div>
    <span>{error}</span>
    </div>
    
    <button 
    onClick={handleSubmit}
     >Submit</button>

      {/* <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form> */}

    </div>

  );
}

export default App;
