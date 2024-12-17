import React, { useState } from "react";
import GetInvolvedSection from "../components/GetInvolvedSection";
import emailjs from "emailjs-com";

// ContactForm Component
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mobile number validation (example: should be 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError(""); // Clear any previous errors

    emailjs
      .send(
        "service_hyun7bp", // Replace with your EmailJS Service ID
        "template_ue9h976", // Replace with your EmailJS Template ID
        formData,
        "3S6NM-4fBa5NUTFWQ" // Replace with your EmailJS User ID
      )
      .then(() => {
        setIsSubmitting(true);
      })
      .catch(() => {
        alert("Failed to send the message. Please try again.");
      });

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
    }, 2000);
  };

  return (
    <div className="w-full mx-auto bg-blue-100 p-8 rounded-lg shadow-xl transform transition-transform duration-500">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-4 animate__animated animate__fadeIn">
        Contact Us
      </h2>

      {/* New Educational Offering and Partnership Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        <div className="col-span-6 lg:col-span-3 bg-orange-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Explore Our Educational Offerings</h3>
          <p className="text-lg text-blue-800 mb-4">
            Explore our educational offerings and become part of an innovative community that drives technological advancements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            "Your support is the key to unlocking endless possibilities for our students. By partnering with us, you are not only enhancing their educational journey but also creating invaluable opportunities that shape their futures."
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Together, we can empower the next generation of rural & tribal youths. Let's work together to make a lasting difference and open doors for our students to thrive in the industries of tomorrow.
          </p>
        </div>
        <div className="col-span-6 lg:col-span-3 bg-green-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">For CSR Activities and Your Kind Support</h3>
          <p className="text-lg text-gray-700 mb-4">
            We are registered under 80G and 12A for your contributions and support.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You can make a significant impact by partnering with us and contributing to our mission of empowering students.
          </p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center text-green-600 animate__animated animate__fadeIn">
          <p className="text-xl">Thank you for contacting us! We will get back to you soon.</p>
        </div>
      ) : (
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg">
            {/* Name, Email, Mobile in a single row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <label className="block text-lg font-medium text-gray-700" htmlFor="name">
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
                <label className="block text-lg font-medium text-gray-700" htmlFor="email">
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
                <label className="block text-lg font-medium text-gray-700" htmlFor="mobile">
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
              <label className="block text-lg font-medium text-gray-700" htmlFor="message">
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
          Niharika Foundation Career Technical Institute expands its reach with the opening of new branches at Murbad and Vasai-Nalasopara, offering quality skill development and career training opportunities to students in these regions.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          {/* Institute Address 1 */}
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-lg hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Institute Address 1:</h4>
              <p className="text-lg text-gray-700 mb-2">
                Near Supriya Hotel, Kolhare Neral-Kashele Road, Near S-Walan, Neral East Taluka: Karjat District: Raigad
              </p>
              <p className="text-lg text-gray-700 mb-2">
                1888 कोल्हारे (सुप्रिया हॉटेल जवळ) नेरळ कशेळे रोड, S वळण नेरळ पूर्व, ता. कर्जत, जि. रायगड
              </p>
              <p className="text-lg text-gray-700">Mr. Ganesh Bhopi Sir - Mob: +91 9767013076 / +91 8421399076</p>
            </div>
          </div>

          {/* Institute Address 2 */}
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-lg hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-green-600 mb-3">Institute Address 2:</h4>
              <p className="text-lg text-gray-700 mb-2">
                Next to Shri Mediya, near Pandurang Krupa Computer Typing Institute, Krishi Bazar Samiti, Murbad.
              </p>
              <p className="text-lg text-gray-700 mb-2">
                श्री मिडीयाच्या बाजुला, पांडुरंग कृपा कॉम्पुटर टायपिंग इन्स्टिट्यूट समोर, कृषी बाजार समिती, मुरबाड.
              </p>
              <p className="text-lg text-gray-700">Mr. Balaram More Sir - Mob: +91 8999688127</p>
            </div>
          </div>

          {/* Institute Address 3 */}
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-lg hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-yellow-600 mb-3">Institute Address 3:</h4>
              <p className="text-lg text-gray-700 mb-2">
                1st Floor, Prasad Sevashram, Beside Young Eyes Clinic, Opp Samaj Seva Mandal, Nirmal. Vasai - Nallasopara West, Pin-401 304
              </p>
              <p className="text-lg text-gray-700 mb-2">
                १ ला मजला, प्रसाद सेवाश्रम, यंग आईज क्लिनिकच्या जवळ, समाज सेवा मंडळ, निर्मल, वसई - नालासोपारा पश्चिम, पिन-४०१ ३०४.
              </p>
              <p className="text-lg text-gray-700">Mr. Santosh Gupta Sir - Mob: +91 8698888766</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <GetInvolvedSection />
      </div>
    </div>
  );
};

export default ContactForm;
