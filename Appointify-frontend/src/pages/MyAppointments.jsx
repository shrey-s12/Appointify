import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 shadow-md rounded-lg mt-10">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">My Appointments</h2>
      {doctors.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Doctor Image */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <img
              src={item.image}
              alt="Doctor"
              className="w-full h-96 sm:h-96 lg:h-56 object-cover rounded-lg shadow-md border border-gray-300"
            />
          </div>

          {/* Doctor Information */}
          <div className="w-full lg:w-2/4 mb-4 lg:mb-0 px-2 sm:px-4">
            <p className="text-lg lg:text-xl font-semibold text-gray-800">{item.name}</p>
            <p className="text-gray-600 mb-1 sm:mb-2">{item.speciality}</p>
            <p className="text-gray-500">Address:</p>
            <p className="text-gray-800">{item.address.line1}</p>
            <p className="text-gray-800 mb-2 sm:mb-4">{item.address.line2}</p>
            <p className="text-gray-800">
              <span className="font-semibold">Date & Time:</span> 25, July, 2024 | 8:30 PM
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
              Pay Online
            </button>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out shadow-md">
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
