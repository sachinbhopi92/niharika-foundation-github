import React from "react";

export interface CourseData {
  title: string;
  description: string;
  imageSrc: string[];
  duration: string;
  students: number;
  link?: string;
}

export const CourseItem: React.FC<CourseData> = ({
  title,
  description,
  imageSrc,
  duration,
  students,
}) => {
  return (
    <div className="course-item bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 ease-in-out duration-300">
      {/* Image Section */}
      <div
        className={`image-container overflow-hidden rounded-t-xl ${
          imageSrc.length === 1 ? "flex" : "grid grid-cols-2 gap-2"
        }`}
      >
        {imageSrc.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} Image ${index + 1}`}
            className={`${
              imageSrc.length === 1
                ? "w-full h-[250px]"
                : "w-full h-[250px]"
            } object-cover hover:scale-110 transition-transform duration-300 ease-in-out`}
          />
        ))}
      </div>

      {/* Course Details */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-600">
          {/* Duration with Styling */}
          <span className="duration-label flex items-center font-medium text-indigo-500">
            <i className="fa fa-calendar mr-2 text-indigo-500"></i>
            <span>Duration: {duration}</span>
          </span>
          {/* Students Count with Styling */}
          <span className="students-label flex items-center font-medium text-green-500">
            <i className="fa fa-users mr-2 text-green-500"></i>
            <span>Students: {students}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
