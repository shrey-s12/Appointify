import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Appointments</h2>
      {doctors.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Doctor Image */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img
              src={item.image}
              alt="Doctor"
              className="w-full h-48 object-cover rounded-lg shadow-md border border-gray-300"
            />
          </div>

          {/* Doctor Information */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0 px-4">
            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
            <p className="text-gray-600 mb-2">{item.speciality}</p>
            <p className="text-gray-500">Address:</p>
            <p className="text-gray-800">{item.address.line1}</p>
            <p className="text-gray-800 mb-4">{item.address.line2}</p>
            <p className="text-gray-800">
              <span className="font-semibold">Date & Time:</span> 25, July, 2024 | 8:30 PM
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full md:w-1/4 flex justify-between md:flex-col md:space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
              Pay Online
            </button>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out shadow-md mt-2">
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyAppointments
