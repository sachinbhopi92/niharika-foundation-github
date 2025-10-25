import React from "react";
import { ProgramData } from "../types";
import { PROGRAMS_DATA } from "../data/programs";
import MediaGallery from "../components/MediaGallery";

// Program component to display each social activity
const Program: React.FC<ProgramData> = ({
  title,
  description,
  images,
  videoUrl,
  date,
  location,
  participants,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-blue-800 mb-4">{title}</h3>

      {/* Program Details */}
      {(date || location || participants) && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          {date && (
            <p className="text-sm text-blue-700 mb-1">
              <span className="font-semibold">📅 दिनांक:</span> {date}
            </p>
          )}
          {location && (
            <p className="text-sm text-blue-700 mb-1">
              <span className="font-semibold">📍 स्थान:</span> {location}
            </p>
          )}
          {participants && (
            <p className="text-sm text-blue-700">
              <span className="font-semibold">👥 सहभागी:</span> {participants}
            </p>
          )}
        </div>
      )}

      <p className="text-lg text-gray-700 mb-4">{description}</p>

      <MediaGallery images={images} videoUrl={videoUrl} title={title} />
    </div>
  );
};

const Programs: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">
          Social Activities and Initiatives
        </h2>
        <h1 className="text-2xl text-center py-5">
          Supporting Students through industrial exposure and Community
          Engagement through free eye check-up camps, blood donation drives, and
          cleanliness campaigns, fostering a sense of responsibility and
          community.
        </h1>

        {/* Loop through all programs and display them */}
        {PROGRAMS_DATA.map((program, index) => (
          <Program
            key={index}
            title={program.title}
            description={program.description}
            images={program.images}
            videoUrl={program.videoUrl}
            date={program.date}
            location={program.location}
            participants={program.participants}
          />
        ))}
      </div>
    </div>
  );
};

const MainComponent: React.FC = () => {
  return (
    <div>
      <Programs />
    </div>
  );
};

export default MainComponent;
