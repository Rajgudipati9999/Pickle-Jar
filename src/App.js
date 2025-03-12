import React ,{useState, useContext}from "react";
import Profile from "./components/Profile";
import ProfileContext from "./context/ProfileContext";

import "./App.css";

const App = () => {
  const [inputValue,setInputValue] = useState()
  const {setProfile} = useContext(ProfileContext)
  console.log(inputValue)
  const onInput = (event) => {
    setInputValue(event.target.value)
    setProfile(event.target.value)
  }

  return (
    <div className="app">
      <div className="input-container">
        <input type="search" placeholder="Enter Something" className="input" value={inputValue} onChange={onInput}/>
      </div>
      <Profile />
    </div>
  );
};

export default App;
