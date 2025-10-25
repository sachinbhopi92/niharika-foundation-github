import React from "react";
import { CourseItem } from "../components/CourseItem";
import { COURSES_DATA } from "../data/courses";

const Courses: React.FC = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Our Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course, index) => (
            <CourseItem key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
