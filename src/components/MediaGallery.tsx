import React from "react";

interface MediaGalleryProps {
  images: string[];
  videoUrl?: string;
  title: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  images,
  videoUrl,
  title,
}) => {
  const hasMedia = images.length > 0 || videoUrl;

  if (!hasMedia) return null;

  return (
    <div className="mt-6">
      {/* Video Section */}
      {videoUrl && (
        <div className="mb-6">
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoUrl}
              title={`${title} Video`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Images Section */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`${title}-${index + 1}`}
                className="w-full h-64 object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                style={{ objectPosition: "center" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
