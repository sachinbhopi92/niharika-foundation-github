import React from 'react';
import { rajbhavanSatkar1, rajbhavanSatkar2, rajbhavanSatkar3, rajbhavanSatkar4, rajbhavanSatkar5, rajbhavanSatkar6, adarshShikshak1, adarshShikshak2, adarshShikshak3, award7, award8 } from '../assets/images/images';

// Define the data structure for each award/recognition
interface AwardData {
  title: string;
  description: string;
  images: string[];
}

const awards: AwardData[] = [
  {
    title: 'Faculty Expertise: Guiding Students to Excellence',
    description: "Niharika Foundation's family members have received prestigious awards by the honorable Governor of Maharashtra state & Mr. Mangal Prabhat Lodha Minister of Skill Development, for our exceptional special efforts taken for empowering rural & tribal youths and commitment to fostering student development.",
    images: [rajbhavanSatkar1, rajbhavanSatkar2, rajbhavanSatkar3, award7, rajbhavanSatkar4, rajbhavanSatkar5, rajbhavanSatkar6, adarshShikshak1]
  },
  {
    title: 'Ideal Teacher Award',
    description: "Ideal Teacher Award is an award given to outstanding teachers who have made a big difference in education. Our team received this award for their creative and effective teaching methods, which have helped provide education to communities that don't have easy access, especially in tribal areas.",
    images: [award8, adarshShikshak2, adarshShikshak3]
  }
];

// Award component to display each award
const Award: React.FC<AwardData> = ({ title, description, images }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-blue-800 mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title}-${index}`} className="rounded-lg shadow-lg object-cover w-full h-64" />
        ))}
      </div>
    </div>
  );
};

const AwardsRecognition: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">Awards & Recognition</h2>

        {/* Loop through all awards and display them */}
        {awards.map((award, index) => (
          <Award 
            key={index} 
            title={award.title} 
            description={award.description} 
            images={award.images} 
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsRecognition;
