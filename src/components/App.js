
import { useEffect, useState } from "react";
import Navebar from "./navbar";
function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(""); 

  const [data,setData] = useState(false)

  useEffect (()=>{
    alert("hey dude")
  },[data])

  const onMynameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const onMyEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const onMyPhoneNumberChange = (e) => {
    setPhone(e.target.value);
    setPhoneError("");
  };

  const handleSubmit = () => {
    if (name == "") {
      setNameError("Please enter the value");
    }
    if (email == "") {
      setEmailError("Enter your email id ");
    }
    if (phone == "") {
      setPhoneError("Please enter valid mobile number");
    }
  };
  return (
    <div className="App">
      <Navebar />
      <h3>Welcome to Sigma edge solutions</h3>
      <div>
        <div>
          <label>Name</label>
        </div>
        <input type="text" value={name} onChange={onMynameChange} />

        <div>
          <span style={{ color: "red" }}>{nameError}</span>
        </div>
      </div>
      <div>
        <div>
          <label>Email</label>
        </div>
        <input type="email" value={email} onChange={onMyEmailChange} />

        <div>
          <span style={{ color: "red" }}>{emailError}</span>
        </div>
        <div>
          <label>Phone Number</label>
        </div>
        <input type="number" value={phone} onChange={onMyPhoneNumberChange} />
        <div style={{ color: "red" }}>{phoneError}</div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
