import React from "react";
import GetInvolvedSection from "../components/GetInvolvedSection";
import AddressCard from "../components/AddressCard";
import { useContactForm } from "../hooks/useContactForm";
import { INSTITUTE_ADDRESSES } from "../constants/contact";

// ContactForm Component
const ContactForm: React.FC = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="w-full mx-auto bg-blue-100 p-8 rounded-lg shadow-xl transform transition-transform duration-500">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-4 animate__animated animate__fadeIn">
        Contact Us
      </h2>

      {/* New Educational Offering and Partnership Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        <div className="col-span-6 lg:col-span-3 bg-orange-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Explore Our Educational Offerings
          </h3>
          <p className="text-lg text-blue-800 mb-4">
            Explore our educational offerings and become part of an innovative
            community that drives technological advancements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            "Your support is the key to unlocking endless possibilities for our
            students. By partnering with us, you are not only enhancing their
            educational journey but also creating invaluable opportunities that
            shape their futures."
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Together, we can empower the next generation of rural & tribal
            youths. Let's work together to make a lasting difference and open
            doors for our students to thrive in the industries of tomorrow.
          </p>
        </div>
        <div className="col-span-6 lg:col-span-3 bg-green-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            For CSR Activities and Your Kind Support
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            We are registered under 80G and 12A for your contributions and
            support.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You can make a significant impact by partnering with us and
            contributing to our mission of empowering students.
          </p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center text-green-600 animate__animated animate__fadeIn">
          <p className="text-xl">
            Thank you for contacting us! We will get back to you soon.
          </p>
        </div>
      ) : (
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-lg"
          >
            {/* Name, Email, Mobile in a single row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <label
                  className="block text-lg font-medium text-gray-700"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="group">
                <label
                  className="block text-lg font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="group">
                <label
                  className="block text-lg font-medium text-gray-700"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your 10-digit mobile number"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </div>

            {/* Message field in full row */}
            <div className="group">
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto p-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-12 mx-auto px-4 bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-8 font-semibold">
          Niharika Foundation Career Technical Institute expands its reach with
          the opening of new branches at Murbad and Vasai-Nalasopara, offering
          quality skill development and career training opportunities to
          students in these regions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          {INSTITUTE_ADDRESSES.map((address, index) => (
            <AddressCard
              key={address.id}
              title={address.title}
              address={address.address}
              addressHindi={address.addressHindi}
              contact={address.contact}
              bgColor={address.bgColor}
              animationDelay={`${index + 1}s`}
            />
          ))}
        </div>
      </div>

      <div className="py-10">
        <GetInvolvedSection />
      </div>
    </div>
  );
};

export default ContactForm;
