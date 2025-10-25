import React from "react";
import {
  rajbhavanSatkar1,
  rajbhavanSatkar2,
  rajbhavanSatkar3,
  rajbhavanSatkar4,
  rajbhavanSatkar5,
  rajbhavanSatkar6,
  adarshShikshak1,
  adarshShikshak2,
  adarshShikshak3,
  adarshShikshak2025,
  award7,
  award8,
} from "../assets/images/images";

// Define the data structure for each award/recognition
interface AwardData {
  title: string;
  description: string;
  images: string[];
  videoUrl?: string;
}

const awards: AwardData[] = [
  {
    title: "राज्यस्तरीय आदर्श शिक्षक पुरस्कार २०२५ - श्री गणेश भोपी सर",
    description:
      "निहारिका फाउंडेशन संचलित करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत येथील इन्स्टिट्यूट चे प्राचार्य श्री गणेश भोपी सर यांना आज राज्यस्तरीय आदर्श शिक्षक पुरस्कार २०२५ घोषित करण्यात आला. यांच्या इन्स्टिट्यूट मध्ये गरीब व गरजू युवक युवतींना मोफत तांत्रिक प्रशिक्षण देऊन रोजगार देण्यात येतो. अजून पर्यंत या संस्थेतर्फे जवळजवळ 1000 विद्यार्थ्यांना तांत्रिक प्रशिक्षण देऊन रोजगार देण्यात आला. या कार्याची दखल घेऊन श्री गणेश भोपी सरांना राज्यस्तरीय आदर्श शिक्षक पुरस्कार देऊन सन्मानित करण्यात आले.",
    images: [adarshShikshak2025],
    videoUrl: "https://www.youtube.com/embed/QF7myUz7vlc",
  },
  {
    title: "Faculty Expertise: Guiding Students to Excellence",
    description:
      "Niharika Foundation's family members have received prestigious awards by the honorable Governor of Maharashtra state & Mr. Mangal Prabhat Lodha Minister of Skill Development, for our exceptional special efforts taken for empowering rural & tribal youths and commitment to fostering student development.",
    images: [
      rajbhavanSatkar1,
      rajbhavanSatkar2,
      rajbhavanSatkar3,
      award7,
      rajbhavanSatkar4,
      rajbhavanSatkar5,
      rajbhavanSatkar6,
      adarshShikshak1,
    ],
  },
  {
    title: "Ideal Teacher Award",
    description:
      "Ideal Teacher Award is an award given to outstanding teachers who have made a big difference in education. Our team received this award for their creative and effective teaching methods, which have helped provide education to communities that don't have easy access, especially in tribal areas.",
    images: [award8, adarshShikshak2, adarshShikshak3],
  },
];

// Award component to display each award
const Award: React.FC<AwardData> = ({
  title,
  description,
  images,
  videoUrl,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-blue-800 mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>

      {/* Video and Images Section - Side by Side for videos */}
      {videoUrl ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Video Section - Half Page */}
          <div className="flex justify-center">
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Images Section - Half Page */}
          <div className="grid grid-cols-1 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`${title}-${index}`}
                  className="w-full h-96 md:h-[500px] lg:h-[600px] object-contain bg-gray-50"
                  style={{ objectPosition: "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Images Only Section - For awards without videos */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`${title}-${index}`}
                className="w-full h-64 object-contain bg-gray-50"
                style={{ objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AwardsRecognition: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">
          Awards & Recognition
        </h2>

        {/* Loop through all awards and display them */}
        {awards.map((award, index) => (
          <Award
            key={index}
            title={award.title}
            description={award.description}
            images={award.images}
            videoUrl={award.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsRecognition;
