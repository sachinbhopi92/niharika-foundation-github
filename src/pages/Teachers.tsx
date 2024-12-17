import React from "react";
import { avinashSir, balaramSir, ganeshriMam, ganeshSir, maheshSir, ranjanaMam, rushiSir, sachinSir, samirSir, sanikaMam, sanjaySir, santoshSir, shraddhaMam } from "../assets/images/images";

interface Staff {
  name: string;
  role: string;
  photo: string;
}

const Teachers: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2019;
  const yearsCompleted = currentYear - startYear;

  // Static data for staff
  const staffList: Staff[] = [
    {
      name: "Ganesh Maruti Bhopi",
      role: "Founder & Director",
      photo: ganeshSir,
    },
    {
      name: "Avinash Sunil Dayare",
      role: "Refrigeration & Air-conditioning, Instructor",
      photo: avinashSir,
    },
    {
      name: "Mahesh Dattatray Karale",
      role: "Electrician Instructor",
      photo: maheshSir,
    },
    {
      name: "Santosh Lalji Gupta",
      role: "Electrician Instructor",
      photo: santoshSir
    },
    {
      name: "Ganeshri Ganesh Bhopi",
      role: "Beautician Instructor",
      photo: ganeshriMam
    },
    {
      name: "Shraddha Suryakant Dhule",
      role: "Computer Instructor",
      photo: shraddhaMam,
    },
    {
      name: "Ranjana Navin Bhopi",
      role: "Food Processing and Home cooking, Instructor",
      photo: ranjanaMam,
    },
    {
      name: "Sanika Prakash Aher",
      role: "Beautician Instructor",
      photo: sanikaMam,
    },
    {
      name: "Balaram More",
      role: "Electrician Instructor",
      photo: balaramSir
    },
    {
      name: "Rushikesh Navin Bhopi",
      role: "Fitter/ Welder/plumber, Instructor",
      photo: rushiSir
    },
    {
      name: "Sanjay Kashinath Bade",
      role: "Treasurer and consulting",
      photo: sanjaySir,
    },
    {
      name: "Samir Gangaram Kambari",
      role: "Trusti and Consulting",
      photo: samirSir,
    },
    {
      name: "Sachin Pandhari Bhopi",
      role: "Communication Officer",
      photo: sachinSir
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-blue-800">
          Our Teaching & Non-Teaching Staff
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Celebrating <span className="text-blue-600">{yearsCompleted}</span> years of educational excellence!
        </p>
      </div>

      {/* Staff Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staffList.map((staff, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-slideUp"
            >
              <div className="relative">
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-full h-48 object-contain" // Change to 'object-contain' for non-cutting images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition duration-500 flex justify-center items-center">
                  <p className="text-white text-lg font-semibold">{staff.role}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
                  {staff.name}
                </h3>
                <p className="text-gray-600 mt-1">{staff.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
