import React from "react";
import {
  dasaraCelebration1,
  dasaraCelebration2,
  dasaraCelebration3,
  dasaraCelebration4,
  dasaraCelebration5,
  dasaraCelebration6,
  birthdayCelebration1,
} from "../assets/images/images";

// Define the data structure for each celebration
interface CelebrationData {
  title: string;
  description: string;
  images: string[];
  videoUrl?: string;
  date?: string;
  location?: string;
}

const celebrations: CelebrationData[] = [
  {
    title: "दसरा उत्सव - Dasara Celebration",
    description:
      "निहारिका फाउंडेशन संचलित करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत येथे दसरा उत्सवाचे आयोजन करण्यात आले. या कार्यक्रमात विद्यार्थी, शिक्षक व कर्मचारी यांनी उत्साहाने सहभाग घेतला. पारंपरिक पद्धतीने दसरा उत्सव साजरा करून भारतीय संस्कृती आणि परंपरांचे जतन केले गेले. या उत्सवाद्वारे विद्यार्थ्यांमध्ये एकता, भाईचारा आणि सांस्कृतिक मूल्यांचे संस्कार रुजवण्यात आले.",
    images: [
      dasaraCelebration1,
      dasaraCelebration2,
      dasaraCelebration3,
      dasaraCelebration4,
      dasaraCelebration5,
      dasaraCelebration6,
    ],
    date: "दसरा उत्सव",
    location: "करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत",
  },
  {
    title: "वाढदिवस साजरीकरण - Birthday Celebrations",
    description:
      "आमच्या संस्थेत विद्यार्थी आणि कर्मचाऱ्यांचे वाढदिवस आनंदाने साजरे केले जातात. या कार्यक्रमांमुळे संस्थेत कौटुंबिक वातावरण निर्माण होते आणि सर्वांमध्ये आपुलकीची भावना वाढते. वाढदिवसाच्या साजरीकरणामुळे विद्यार्थ्यांना आनंदाचे क्षण मिळतात आणि त्यांचे मानसिक आरोग्य चांगले राहते.",
    images: [birthdayCelebration1],
    date: "नियमित आधारावर",
    location: "करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत",
  },
];

// Celebration component to display each celebration
const Celebration: React.FC<CelebrationData> = ({
  title,
  description,
  images,
  videoUrl,
  date,
  location,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-blue-800 mb-4">{title}</h3>

      {/* Celebration Details */}
      {(date || location) && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          {date && (
            <p className="text-sm text-blue-700 mb-1">
              <span className="font-semibold">📅 दिनांक:</span> {date}
            </p>
          )}
          {location && (
            <p className="text-sm text-blue-700">
              <span className="font-semibold">📍 स्थान:</span> {location}
            </p>
          )}
        </div>
      )}

      <p className="text-lg text-gray-700 mb-6">{description}</p>

      {/* Video Section */}
      {videoUrl && (
        <div className="mb-6">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
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
    </div>
  );
};

const Celebrations: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-purple-900 text-center mb-6">
          Celebrations & Festivals
        </h2>
        <p className="text-xl text-center text-purple-800 mb-12 max-w-4xl mx-auto">
          आमच्या संस्थेत विविध उत्सव आणि कार्यक्रम साजरे केले जातात जे
          विद्यार्थ्यांमध्ये सांस्कृतिक मूल्ये, एकता आणि आनंदाची भावना निर्माण
          करतात.
        </p>

        {/* Loop through all celebrations and display them */}
        {celebrations.map((celebration, index) => (
          <Celebration
            key={index}
            title={celebration.title}
            description={celebration.description}
            images={celebration.images}
            videoUrl={celebration.videoUrl}
            date={celebration.date}
            location={celebration.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Celebrations;
