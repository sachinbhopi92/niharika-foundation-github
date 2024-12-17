type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-grayText">{description}</p>
    </div>
  </div>
);

export default Card;
