
import React,{useContext} from 'react'
import "./Profile.css";
import ProfileContext from "../context/ProfileContext";
const user = 'Rahul'
const Profile = () => {
  const {userProfile} = useContext(ProfileContext)
  return (
    <div style={{ color: "purple" }} className="profile-bg">
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {userProfile}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
      <div className="profile-card">
        <h1>UserData</h1>
        <p>Profile Details Are : {user}</p>
      </div>
    </div>
  );
};
export default Profile;
