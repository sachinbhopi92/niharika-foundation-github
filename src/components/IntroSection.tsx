import { Link } from "react-router-dom";
import { collegeImage } from "../assets/images/images";

const IntroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${collegeImage})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content on top of the background */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s hover:scale-105 transition-all">
          Empower Your Future with Technical Training
        </h1>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s opacity-75 hover:opacity-100 transition-opacity">
          Discover our vision, mission, diverse programs, and the profound impact we have on our students and community.
        </p>
        <Link
          to="/courses"
          className="bg-blue-900 px-10 py-4 rounded-full text-xl font-semibold transition-all transform hover:bg-blue-700 hover:scale-110 hover:shadow-lg animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;
