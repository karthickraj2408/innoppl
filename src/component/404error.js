import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const handleNotFound = () =>[
        navigate("/")
    ] 
  return (
    <div> <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600">Page Not Found</h2>
      <p className="mt-4 text-gray-500">Sorry, the page you are looking for does not exist.</p>
      <button onClick={handleNotFound} className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
        Go to Home
      </button>
    </div>
  </div></div>
  )
}

export default NotFound