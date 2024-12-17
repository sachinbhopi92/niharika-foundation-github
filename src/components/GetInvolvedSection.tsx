const GetInvolvedSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
          Get Involved with Niharika Foundation
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Be a part of something bigger. There are many ways you can contribute to making a positive impact in the lives of underserved communities.
        </p>
        <div className="flex justify-center gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg w-60 transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Donate</h3>
            <p className="text-gray-600 mb-4">
              Your donations can provide scholarships, materials, and support for underprivileged students.
            </p>
            <button className="bg-blue-900 px-6 py-3 text-white rounded-full hover:bg-blue-700 transition-all">
              Donate Now
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-60 transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Share your time and expertise with our students and help them reach their full potential.
            </p>
            <button className="bg-blue-900 px-6 py-3 text-white rounded-full hover:bg-blue-700 transition-all">
              Volunteer Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
