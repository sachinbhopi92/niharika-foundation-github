import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FOOTER_LINKS } from "../constants/navigation";
import { CONTACT_INFO } from "../constants/contact";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* About Us Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b-2 border-yellow-400 pb-2">
            About Us
          </h3>
          <p className="text-gray-300 leading-relaxed">
            At the Career Technical Training Institute, operated by the Niharika
            Foundation, we are committed to social upliftment and rural
            empowerment. We strive to create a positive impact on the lives of
            Adivasi individuals and rural and tribal youth by providing them
            with the tools and opportunities they need to succeed.
          </p>
        </div>

        {/* Information Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b-2 border-yellow-400 pb-2">
            Information Links
          </h3>
          <ul className="flex flex-row gap-10">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b-2 border-yellow-400 pb-2">
            Contact Us
          </h3>
          <div className="space-y-4">
            {/* Contact Details */}
            <ul className="text-gray-300 space-y-2">
              <li>
                <span className="font-medium text-yellow-400">
                  Mobile: &nbsp; &nbsp;{" "}
                </span>
                {CONTACT_INFO.phones.join(" / ")}
              </li>
              <li>
                <span className="font-medium text-yellow-400">
                  Email:&nbsp; &nbsp;
                </span>
                {CONTACT_INFO.emails.map((email, index) => (
                  <span key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-yellow-400"
                    >
                      {email}
                    </a>
                    {index < CONTACT_INFO.emails.length - 1 && " / "}
                  </span>
                ))}
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-6 mt-2">
              <span className="font-medium text-yellow-400">Follow Us:</span>{" "}
              <br />
              <a
                href={CONTACT_INFO.socialMedia.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 transition-transform transform hover:scale-110"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 transition-transform transform hover:scale-110"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 transition-transform transform hover:scale-110"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-950 text-center py-4 mt-6">
        <p className="text-gray-400 text-sm">
          All Rights Reserved. &copy; {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Niharika Foundation
          </Link>
          &nbsp; | Design By:{" "}
          <Link
            to="/"
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Saharsha Tech Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
