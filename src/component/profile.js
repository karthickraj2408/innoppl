import React, { useEffect, useState } from 'react'
import Header from "./header"
import EditProfile from './editProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const [editPopUp, setEditPopUp] = useState(false);
  const [profile, setProfile] = useState({});
  const storedData = localStorage.getItem("profile");
  useEffect(() => {
      
      if (storedData) {
          setProfile(JSON.parse(storedData));
      }
  }, [storedData]);

  const handleOpenPopUp = () => {
      setEditPopUp(!editPopUp);
  };
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden max-md:m-2  ">
        {/* Profile Section */}
        <div className="text-center p-6 border-b bg-blue-950 ">
          
          <h2 className="text-2xl font-semibold text-white mt-2">{profile.username}</h2>
         
        </div>
       
        {/* Personal Details */}
        <div className="p-6 space-y-4 mx-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>Name:</strong> {profile.name}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {profile.email}
            </p>
            <p className="text-gray-600">
              <strong>Date of Birth:</strong> {profile.dob}
            </p>
            <p className="text-gray-600">
              <strong>Gender:</strong> {profile.gender}
            </p>
            <p className="text-gray-600">
              <strong>Phone Number:</strong> {profile.mobile}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {profile.address}
            </p>
            <p className="text-gray-600">
              <strong>Zip Code:</strong> {profile.zipCode}
            </p>
          </div>
        </div>
        <div className="text-center p-6">
          <button
            className="px-4 py-2 bg-blue-950 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
            onClick={handleOpenPopUp} 
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
     {editPopUp && <EditProfile onClose={handleOpenPopUp} profile={profile} />}
    </>
  )
}

export default Profile