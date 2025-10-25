import React from "react";

interface AddressCardProps {
  title: string;
  address: string;
  addressHindi: string;
  contact: string;
  bgColor: string;
  animationDelay?: string;
}

const AddressCard: React.FC<AddressCardProps> = ({
  title,
  address,
  addressHindi,
  contact,
  bgColor,
  animationDelay = "1s",
}) => {
  const getBgColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 text-blue-600";
      case "green":
        return "bg-green-50 border-green-200 text-green-600";
      case "yellow":
        return "bg-yellow-50 border-yellow-200 text-yellow-600";
      default:
        return "bg-gray-50 border-gray-200 text-gray-600";
    }
  };

  return (
    <div
      className={`animate__animated animate__fadeIn animate__delay-${animationDelay}`}
    >
      <div
        className={`${getBgColorClass(
          bgColor
        )} p-6 rounded-lg border shadow-lg hover:shadow-xl`}
      >
        <h4 className="text-2xl font-semibold mb-3">{title}</h4>
        <p className="text-lg text-gray-700 mb-2">{address}</p>
        <p className="text-lg text-gray-700 mb-2">{addressHindi}</p>
        <p className="text-lg text-gray-700">{contact}</p>
      </div>
    </div>
  );
};

export default AddressCard;
