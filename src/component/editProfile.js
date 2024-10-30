import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import updateProfile from "../appSlice/authSlice"

const EditProfile = ({ onClose ,profile  }) => {
   
  const [profileData, setProfileData] = useState(profile);
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfileUpdate = (e) => {
      e.preventDefault();
      console.log("Profile Data before dispatch:", profileData);
      // dispatch(updateProfile(profileData)); // Dispatch updated profile
      localStorage.setItem('profile', JSON.stringify(profileData)); 
      onClose(); 
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll	">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
        <form  className="space-y-4" onSubmit={handleProfileUpdate}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={profileData.name || ''}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
             Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={profileData.email || ''}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={profileData.mobile || ''}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Date Of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={profileData.dob || ''}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            />
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-900">Gender</label>
            <select
             
              name="gender"
              id="gender"     
              value={profileData.gender || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            >
              
              <option  >Select Option</option>
              <option value="male" >Male</option>
              <option value="female">Female</option>
              
            </select>
          </div>
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="2"
              value={profileData.address || ''}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            ></textarea>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Zip Code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="tel"
              value={profileData.zipCode || ''}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-2"
            />
          </div>

          

          <div className="flex justify-between">
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile