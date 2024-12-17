import React from 'react';
import {
  electricianImage,
  acMechanicalImage,
  fitterImage,
  welderImage,
  plumberImage,
  beauticianImage,
  fashionDesignImage,
  foodProcessingImage,
  aariWorkImage,
  jewelleryMakingImage,
  computerCoursesImage,
  twoWheelerImage,
  refrigeratorImage
} from './../assets/images/images'; 
import { CourseData, CourseItem } from '../components/CourseItem';


const Courses: React.FC = () => {
  const courses: CourseData[] = [
    {
      title: "Electrician",
      description: "Comprehensive training in electrical systems, including theory, practical skills, and safety practices.",
      imageSrc: [electricianImage],
      duration: "1 Year / 6 Months",
      students: 30
    },
    {
      title: "Refrigeration & A/C (RAC)",
      description: "Specialized training in installation, maintenance, and repair of air conditioning and refrigeration systems.",
      imageSrc: [acMechanicalImage, refrigeratorImage],
      duration: "1 Year / 6 Months",
      students: 30
    },
    {
      title: "Fitter",
      description: "Practical training in fitting and assembling mechanical components for a career as a mechanical technician.",
      imageSrc: [fitterImage],
      duration: "1 Year",
      students: 30
    },
    {
      title: "Welder",
      description: "Comprehensive training in welding techniques and equipment operation for skilled welding careers.",
      imageSrc: [welderImage],
      duration: "6 Months / 1 Year",
      students: 30
    },
    {
      title: "Plumber",
      description: "Comprehensive training in plumbing techniques, including pipe installation, repair, and maintenance.",
      imageSrc: [plumberImage],
      duration: "6 Months",
      students: 30
    },
    {
      title: "Mechanical Motor Vehicle",
      description: "Comprehensive training in moto mechanic techniques, including installation, repair, and maintenance.",
      imageSrc: [twoWheelerImage],
      duration: "6 Months",
      students: 30
    },
    {
      title: "Beautician",
      description: "Training in beauty treatments, skincare, makeup, and salon management.",
      imageSrc: [beauticianImage],
      duration: "2 Months",
      students: 30
    },
    {
      title: "Fashion Designing & Tailoring",
      description: "Learn fashion design, garment construction, and tailoring skills to enter the fashion industry.",
      imageSrc: [fashionDesignImage],
      duration: "2 Months",
      students: 30
    },
    {
      title: "Food Processing & Cooking",
      description: "Comprehensive training in food preparation, cooking, and food processing techniques.",
      imageSrc: [foodProcessingImage],
      duration: "2 Months",
      students: 30
    },
    {
      title: "Aari Work",
      description: "Learn traditional Aari embroidery, a form of handwork used in clothing decoration.",
      imageSrc: [aariWorkImage],
      duration: "2 Months",
      students: 30
    },
    {
      title: "Jewellery Making",
      description: "Comprehensive training in the design and crafting of jewelry, including metal and gemstone work.",
      imageSrc: [jewelleryMakingImage],
      duration: "1 Months",
      students: 30
    },
    {
      title: "Computer - CCC, Tally",
      description: "Training in basic computer applications and Tally for accounting and financial management.",
      imageSrc: [computerCoursesImage],
      duration: "3 Months",
      students: 30
    }
  ];

  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Our Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseItem key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
