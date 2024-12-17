import React from 'react';
import { beautyFacial1, beautyFacial2, beautyFacial3, bloodDonate1, bloodDonate2, bloodDonate3, computerLab1, computerLab2, computerLab3, eyeCheckup1, eyeCheckup2, eyeCheckup3, fitIndia1, fitIndia2, fitIndia3, hairCutting1, hairCutting2, hairCutting3, industrialVisit1, industrialVisit2, industrialVisit3, rplTraining1, rplTraining2, rplTraining3, skillIndia1, skillIndia2, skillIndia3, swachBharat1, swachBharat2, swachBharat3, urjaMarg1, urjaMarg2, urjaMarg3, workshop1, workshop2, workshop3, workshop4 } from '../assets/images/images';

// Define the data structure for each program
interface ProgramData {
  title: string;
  description: string;
  images: string[];
}

const programs: ProgramData[] = [
  {
    title: 'Blood Donation Camp',
    description: 'Our institute organized a blood donation camp, addressing the critical need for blood in medical emergencies and supporting community healthcare.',
    images: [bloodDonate1,bloodDonate2,bloodDonate3]
  },
  {
    title: 'Swachh Bharat Abhiyan',
    description: 'We actively participated in the Swachh Bharat Abhiyan, organizing cleanliness drives and awareness campaigns to promote a cleaner, greener India.',
    images: [swachBharat1, swachBharat2, swachBharat3]
  },
  {
    title: 'Free Eye Checkup Camp',
    description: 'We organized a free eye checkup camp to promote eye health awareness and early detection.',
    images: [eyeCheckup1, eyeCheckup2, eyeCheckup3]
  },
  {
    title: 'RPL Training under PMKVY Scheme',
    description: `RPL training refers to Recognition of Prior Learning training, which is a part of the Pradhan Mantri Kaushal Vikas
                Yojana (PMKVY) scheme in India. The PMKVY scheme aims to provide skill development training to Indian youth and
                enhance their employability. Under the PMKVY scheme, RPL training is designed for individuals who have prior learning
                and work experience in a particular trade or occupation but lack formal recognition or certification. The training
                program assesses their existing skills and knowledge and provides them with a platform to obtain a formal certification
                based on their competency.`,
    images: [rplTraining1, rplTraining2, rplTraining3]
  },
  {
    "title": "Skill India Certificate Distribution",
    "description": "The Skill India certificate distribution ceremony was organized at Niharika Foundation. In this ceremony, the deserving candidates were awarded with their certificates based on their qualifications. The event acknowledged the efforts and hardships of the trainees in achieving their qualifications.",
    "images": [skillIndia1, skillIndia2, skillIndia3]
  },
  {
    "title": "Industrial Visit at Ambarnath ITI",
    "description": "The Industrial Visit at Ambarnath ITI was a valuable opportunity for our students to gain practical insights into the industrial processes and operations. This visit aimed to bridge the gap between theoretical knowledge and real-world applications by providing students with a firsthand experience of the industrial environment. It allowed them to witness the functioning of various machines, observe manufacturing processes, and interact with industry professionals.",
    "images": [industrialVisit1, industrialVisit2, industrialVisit3]
  },
  {
    "title": "Fit India Run India",
    "description": "The Fit India Run India Marathon program was organized to promote fitness and encourage active participation in sports and physical activities. The program aimed to inspire individuals of all ages and fitness levels to engage in running and adopt a healthy and active lifestyle. The marathon featured different categories to accommodate participants of different age groups and fitness levels. The program emphasized the importance of regular physical exercise, promoting the Fit India movement initiated by the Government of India.",
    "images": [fitIndia1, fitIndia2, fitIndia3]
  },
  {
    "title": "Basic Electrician Course by Mumbai Urja Marg Team",
    "description": "The Basic Electrician Course was organized by the Mumbai Urja Marg team to provide fundamental electrical skills to individuals interested in pursuing a career in electrical work. The course focused on essential electrical concepts, safety practices, and hands-on training to equip participants with the knowledge and confidence required to work in the electrical field. Participants learned about circuit wiring, electrical installations, troubleshooting, and maintenance of electrical systems. The course was designed to ensure that trainees understood both the theory and practical aspects of electrical work in real-world scenarios.",
    "images": [urjaMarg1, urjaMarg2, urjaMarg3]
  },
  {
    "title": "Free Hair Cutting Service Event",
    "description": "As part of our social outreach program, we organized a free hair cutting service event for the Adivasi community. The event aimed to provide grooming services to individuals who may not have easy access to such facilities. Trained professionals volunteered their time to offer haircuts and facials, empowering the community by enhancing their personal grooming and boosting their confidence.",
    "images": [hairCutting1, hairCutting2, hairCutting3]
  },
  {
    "title": "Free Computer Lab Access and Digital Literacy Training",
    "description": "In an effort to enhance digital literacy, we set up a free computer lab for the Adivasi community. The lab provided access to computers and internet resources, allowing individuals to learn essential digital skills. Workshops were conducted to teach the basics of computer usage, internet navigation, and other digital tools that are essential in today's world. This initiative aimed to empower the community with the knowledge needed to access information, improve employability, and stay connected.",
    "images": [computerLab1, computerLab2, computerLab3]
  },
  {
    "title": "Beautician Facial Services",
    "description": "We organized health and wellness camps specifically for the Adivasi community, offering free medical check-ups, health consultations, and awareness programs on maintaining a healthy lifestyle. The camp included sessions on hygiene, nutrition, and preventive healthcare, aimed at promoting overall well-being and health education. Medical professionals from various fields volunteered to provide their expertise and support to improve the community's access to essential healthcare services.",
    "images": [beautyFacial1, beautyFacial2, beautyFacial3]
  },
  {
    "title": "Career Guidance Workshop, Tree Plantation Drive, Food Distribution and Tailoring Workshop",
    "description": "The Career Guidance Workshop aimed to provide students with insights into various career paths and opportunities, helping them make informed decisions about their future. The Tree Plantation Drive was organized to promote environmental conservation and create awareness about the importance of planting trees. The Food Distribution initiative aimed to provide meals to underprivileged individuals and families, addressing issues of hunger and malnutrition. The Tailoring Workshop offered training in basic tailoring skills, empowering individuals with the knowledge to create and repair garments.",
    "images": [workshop1, workshop2, workshop3, workshop4]
  },

];

// Program component to display each social activity
const Program: React.FC<ProgramData> = ({ title, description, images }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-blue-800 mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title}-${index}`} className="rounded-lg shadow-lg object-cover w-full h-64" />
        ))}
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">Social Activities and Initiatives</h2>
        <h1 className='text-2xl text-center py-5'>Supporting Students through industrial exposure and Community Engagement through free eye check-up camps, blood donation drives, and cleanliness campaigns, fostering a sense of responsibility and community.</h1>

        {/* Loop through all programs and display them */}
        {programs.map((program, index) => (
          <Program 
            key={index} 
            title={program.title} 
            description={program.description} 
            images={program.images} 
          />
        ))}
      </div>
    </div>
  );
};

const MainComponent: React.FC = () => {
  return (
    <div>
      <Programs />
    </div>
  );
};

export default MainComponent;
