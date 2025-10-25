import React from "react";
import { FaGraduationCap, FaUserCheck, FaBriefcase } from "react-icons/fa";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  student1,
  student2,
} from "../assets/images/images";

// Placeholder images for partner logos (Replace these with actual image paths)
const partnerLogos = [
  { id: 1, src: logo1, alt: "Company 1" },
  { id: 2, src: logo2, alt: "Company 2" },
  { id: 3, src: logo3, alt: "Company 3" },
  { id: 4, src: logo4, alt: "Company 4" },
  { id: 5, src: logo5, alt: "Company 5" },
  { id: 6, src: logo6, alt: "Company 6" },
  { id: 7, src: logo7, alt: "Company 7" },
  { id: 8, src: logo8, alt: "Company 8" },
  { id: 9, src: logo9, alt: "Company 9" },
  { id: 10, src: logo10, alt: "Company 10" },
  { id: 11, src: logo11, alt: "Company 11" },
  { id: 12, src: logo12, alt: "Company 12" },
  { id: 13, src: logo13, alt: "Company 13" },
  { id: 14, src: logo14, alt: "Company 14" },
  { id: 15, src: logo15, alt: "Company 15" },
  { id: 16, src: logo16, alt: "Company 16" },
  { id: 17, src: logo17, alt: "Company 17" },
  { id: 18, src: logo18, alt: "Company 18" },
  { id: 19, src: logo19, alt: "Company 19" },
  { id: 20, src: logo20, alt: "Company 20" },
];

const Achievements: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Success Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Celebrating our outcomes, achievements, and inspiring careers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Successful Program Completion */}
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all">
              <FaGraduationCap
                size={50}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Successful Program Completion
              </h3>
              <p className="text-gray-600">
                Thousands of students have successfully completed various
                programs at Niharika Foundation, equipping them with vital
                skills for their careers.
              </p>
            </div>
            {/* Life-Changing Experiences */}
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all">
              <FaUserCheck size={50} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Life-Changing Experiences
              </h3>
              <p className="text-gray-600">
                Our institute inspires students to transform their lives by
                providing them with the knowledge and tools necessary for
                personal and professional growth.
              </p>
            </div>
            {/* High Employment Rate */}
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all">
              <FaBriefcase size={50} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                High Employment Rate
              </h3>
              <p className="text-gray-600">
                A significant percentage of our skilled technicians secure
                employment in their respective fields, demonstrating the
                effectiveness of our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        {/* Content Above Image */}
        <div className="text-center px-6 py-12 bg-blue-900 text-white">
          <h2 className="text-4xl font-extrabold mb-4">Placed Students</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our students have been placed in leading organizations, achieving
            success and driving positive change in their respective careers.
          </p>
        </div>

        {/* Placement Success Stories */}
        <div className="w-full">
          <img
            src={student1}
            alt="Placed Student - Success Story 1"
            className="w-full h-auto"
          />
        </div>

        {/* Success Story Text Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              🎉 Another Success Story! 🎉
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              आमच्या संस्थेतून प्रशिक्षण घेतलेले आणखी एक विद्यार्थी यशस्वीरित्या
              नोकरीत रुजू झाले आहेत. त्यांच्या कष्टाचे आणि आमच्या गुणवत्तापूर्ण
              प्रशिक्षणाचे हे फळ आहे.
            </p>
            <p className="text-xl font-semibold text-blue-800 mb-6">
              "Quality Training • Bright Future • Success Guaranteed"
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-green-600 font-bold text-lg mr-2">✓</span>
                Industry-Ready Skills
              </div>
              <div className="flex items-center">
                <span className="text-green-600 font-bold text-lg mr-2">✓</span>
                100% Job Assistance
              </div>
              <div className="flex items-center">
                <span className="text-green-600 font-bold text-lg mr-2">✓</span>
                Proven Track Record
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            src={student2}
            alt="Placed Student - Success Story 2"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-16 bg-blue-50">
        <div className="text-center px-6 py-5 bg-blue-900 text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            Associate Industries & Partners
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partnerLogos.map((logo) => (
            <div key={logo.id} className="p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-32 mx-auto transition-transform transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
