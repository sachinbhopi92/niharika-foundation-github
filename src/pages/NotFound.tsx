// src/components/NotFoundPage.tsx
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-900">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <p className="text-lg text-gray-600 mb-8">
        The page you're looking for might have been moved or doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-blue-900 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
