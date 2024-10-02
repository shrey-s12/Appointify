import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: '1234 Main St',
      line2: 'Apt 123',
    },
    gender: 'Male',
    dob: '2000-01-01',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 hover:shadow-xl transition-shadow duration-300">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-6">
          <img src={userData.image} alt="Profile" className="w-28 h-28 rounded border border-gray-300 shadow-lg hover:shadow-md transition duration-300" />
          {isEdit ? (
            <input
              value={userData.name}
              type="text"
              onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
              className="text-3xl font-semibold border-b-2 border-transparent focus:border-blue-400 focus:outline-none transition duration-300 ease-in-out"
            />
          ) : (
            <p className="text-3xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">{userData.name}</p>
          )}
        </div>
        <div>
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isEdit ? 'Save Information' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <p className="text-gray-500">Email Address</p>
            <p className="font-medium text-gray-800 hover:text-blue-600 transition duration-300">{userData.email}</p>
          </div>
          {/* Phone */}
          <div>
            <p className="text-gray-500">Phone Number</p>
            {isEdit ? (
              <input
                value={userData.phone}
                type="text"
                onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full border-b-2 border-transparent focus:border-blue-400 focus:outline-none transition duration-300 ease-in-out"
              />
            ) : (
              <p className="font-medium text-gray-800 hover:text-blue-600 transition duration-300">{userData.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Address Information</h2>
        {isEdit ? (
          <div className="grid grid-cols-1 gap-4">
            <input
              value={userData.address.line1}
              type="text"
              onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
              className="w-full border-b-2 border-transparent focus:border-blue-400 focus:outline-none transition duration-300 ease-in-out"
              placeholder="Address Line 1"
            />
            <input
              value={userData.address.line2}
              type="text"
              onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
              className="w-full border-b-2 border-transparent focus:border-blue-400 focus:outline-none transition duration-300 ease-in-out"
              placeholder="Address Line 2"
            />
          </div>
        ) : (
          <p className="text-gray-800 font-medium">
            {userData.address.line1}<br />
            {userData.address.line2}
          </p>
        )}
      </div>

      {/* Basic Information */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <p className="text-gray-500">Gender</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                className="w-full border-b-2 border-transparent focus:border-blue-400 focus:outline-none text-gray-800 transition duration-300 ease-in-out"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="font-medium text-gray-800 hover:text-blue-600 transition duration-300">{userData.gender}</p>
            )}
          </div>
          {/* Date of Birth */}
          <div>
            <p className="text-gray-500">Birthday</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                className="w-full border-b-2 border-transparent focus:border-blue-400 focus:outline-none text-gray-800 transition duration-300 ease-in-out"
              />
            ) : (
              <p className="font-medium text-gray-800 hover:text-blue-600 transition duration-300">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
