import React from 'react';
import { FaGraduationCap, FaHandshake, FaHistory, FaUsers } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const About: React.FC = () => {

  const stats = [
    {
      year: "2023-2024",
      enrollment: 410,
      trained: 405,
      dropouts: 5,
      placement: "90%",
    },
    {
      year: "2022-2023",
      enrollment: 380,
      trained: 375,
      dropouts: 5,
      placement: "90%",
    },
    {
      year: "2021-2022",
      enrollment: 370,
      trained: 360,
      dropouts: 10,
      placement: "80%",
    },
    {
      year: "2020-2021",
      enrollment: 345,
      trained: 337,
      dropouts: 8,
      placement: "81%",
    },
    {
      year: "2019-2020",
      enrollment: 125,
      trained: 120,
      dropouts: 5,
      placement: "85%",
    },
  ];

  const historyEvents = [
    {
      year: '2023-2024 : Village-to-Village Training for Rural & Adivasi Students',
      text: 'Conducted free training programs across villages to empower rural and Adivasi students, focusing on skill development for better livelihood opportunities. Successfully placed trained individuals in relevant jobs within local industries, fostering economic growth and reducing unemployment in remote areas.',
    },
    {
      year: '2022-2023 : Career Guidance Programs',
      text: 'Niharika Foundation launched career guidance programs aimed at providing individuals with insights into job opportunities and guidance for skill enhancement by confidence-building of rural youths.',
    },
    {
      year: '2021-2022 : Involvement in Social Causes',
      text: 'The foundation actively participated in various social initiatives, including blood donation camps and the Swachh Bharat Abhiyan, demonstrating its commitment to community welfare.',
    },
    {
      year: '2020-2021 : Associates with Leading Companies',
      text: 'Niharika Foundation formed strategic partnerships with prominent companies and organizations, enhancing the training curriculum and providing job placement opportunities for skilled technicians.',
    },
    {
      year: '2019-2020 : Establishment of Niharika Foundation',
      text: 'Mr. Ganesh Maruti Bhopi (Mechanical Engineer) founded the Niharika Foundation with the mission of providing career technical training and skill development programs for individuals lacking access to formal education and social enhancement.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-300">
      {/* Main Heading */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 leading-snug animate__animated animate__fadeInUp">
                Mission and Vision
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeInUp delay-200">
            Empowering individuals and transforming communities through skill development.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-2">
        <div className="container mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          {[{
            title: 'Our Mission',
            description:
              'To empower individuals through quality career technical training and skill development programs, enabling them to gain relevant skills, enhance employability, fulfill the needs of industry by providing them skilled workforce & contribute to the socio-economic & development of the rural & tribal youth & community.',
            icon: <FaGraduationCap size={40} className="text-blue-800 mb-4 mx-auto" />
          },
          {
            title: 'Our Vision',
            description:
              'To be a leading organization in career technical training and skill development, recognized for excellence in empowering individuals and communities.',
            icon: <MdSchool size={40} className="text-blue-800 mb-4 mx-auto" />
          },
            {
            title: "Skilled Workforce",
            description:
                "Striving to create a skilled workforce that contributes to the overall progress and prosperity of the nation.",
            icon: <FaUsers size={40} className="text-blue-800 mb-4 mx-auto" />,
            },
            {
            title: "Social Impact",
            description:
                "Aiming to foster innovation, entrepreneurship, and inclusive growth as a catalyst for socio-economic development.",
            icon: <FaHandshake size={40} className="text-blue-800 mb-4 mx-auto" />,
            },
            {
            title: "Catalyst for Development",
            description:
                "Niharika Foundation strives to create a positive social impact through various initiatives, promoting inclusivity, sustainability, and community development.",
            icon: <FaHistory size={40} className="text-blue-800 mb-4 mx-auto" />,
            }]
            .map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                {item.icon}
                <h3 className="text-2xl font-semibold text-blue-800 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gradient-to-r from-indigo-200 to-indigo-400">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Our Achievements
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white animate-fadeIn">
                <tr>
                  <th className="py-3 px-4">Academic Year</th>
                  <th className="py-3 px-4">Total Enrollment</th>
                  <th className="py-3 px-4">Trained Students</th>
                  <th className="py-3 px-4">Dropouts</th>
                  <th className="py-3 px-4">Placement %</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, index) => (
                  <tr
                    key={index}
                    className={`transition duration-300 hover:bg-indigo-50 ${
                      index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                    } animate-slideUp`}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-700">
                      {stat.year}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{stat.enrollment}</td>
                    <td className="py-3 px-4 text-gray-600">{stat.trained}</td>
                    <td className="py-3 px-4 text-gray-600">{stat.dropouts}</td>
                    <td className="py-3 px-4 text-gray-600">{stat.placement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our History
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Career Technical Training Institute, established in 2019, has been actively engaging in social activities that have grown and diversified each year.
            </p>
          </div>

          <div className="relative border-l-4 border-blue-500 pl-6 space-y-6">
            {historyEvents.map((event, index) => (
              <div key={index} className="transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  {event.year}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {event.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
