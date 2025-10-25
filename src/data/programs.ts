import { ProgramData } from '../types';
import { 
  beautyFacial1, beautyFacial2, beautyFacial3, 
  bloodDonate1, bloodDonate2, bloodDonate3, 
  computerLab1, computerLab2, computerLab3, 
  eyeCheckup1, eyeCheckup2, eyeCheckup3, 
  fitIndia1, fitIndia2, fitIndia3, 
  hairCutting1, hairCutting2, hairCutting3, 
  industrialVisit1, industrialVisit2, industrialVisit3, 
  rplTraining1, rplTraining2, rplTraining3, 
  skillIndia1, skillIndia2, skillIndia3, 
  swachBharat1, swachBharat2, swachBharat3, 
  urjaMarg1, urjaMarg2, urjaMarg3, 
  workshop1, workshop2, workshop3, workshop4 ,
  emergencyTraining1, emergencyTraining2, emergencyTraining3,
  healthTraining1, healthTraining2
} from '../assets/images/images';

export const PROGRAMS_DATA: ProgramData[] = [
  // New Programs - January 2025 Emergency Training
  {
    title: 'आपत्कालीन सुरक्षा प्रशिक्षण व सेफ्टी किट वाटप - जानेवारी 2025',
    description: 'जनवरी 2025 मध्ये निहारिका फाउंडेशन संचलित करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत येथे जवळजवळ शंभर विद्यार्थ्यांना आपत्कालीन ट्रेनिंग देऊन सेफ्टी किट चे वाटप करण्यात आले. या कार्यक्रमाप्रसंगी कर्जत तालुक्यातील पंचायत समितीचे सभापती श्री अमर मिसाळ साहेब व महाराष्ट्र राज्य शिवछत्रपती शिक्षक संघटनेचे कर्जत तालुक्याचे अध्यक्ष श्री संतोष कांबरी सर उपस्थित होते.',
    images: [emergencyTraining1, emergencyTraining2, emergencyTraining3],
    date: 'जानेवारी 2025',
    location: 'करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत',
    participants: 'जवळजवळ शंभर विद्यार्थी'
  },

  // New Programs - June 2025 Health Training Camp
  {
    title: 'आरोग्य विषयी प्राथमिक प्रशिक्षण शिबिर - जुलै 2025',
    description: 'जनशिक्षण संस्था रायगड व निहारिका फाउंडेशन संचलित करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत यांच्या संयुक्त विद्यमाने दोन दिवसाचे आरोग्य विषयी प्राथमिक प्रशिक्षण शिबिर आयोजित करण्यात आले. या कार्यक्रमाचे उद्घाटन डॉ.राकेशजी पाटील, डॉ. राजेंद्र जी गरजे, समाजभूषण पुरस्कार विजेते व समाजसेवक श्री सचिन जी लोंगले यांच्या हस्ते झाले 🙏🙏',
    images: [healthTraining1, healthTraining2],
    videoUrl: `https://www.youtube.com/embed/9vr3yNnV3Tg`,
    date: '16 जुलै 2025 ते 31 जुलै 2025',
    location: 'करिअर टेक्निकल ट्रेनिंग इन्स्टिट्यूट नेरळ कर्जत',
    participants: 'जनशिक्षण संस्था रायगड व निहारिका फाउंडेशन संयुक्त विद्यमाने'
  },

  // Existing Programs
  {
    title: 'Blood Donation Camp',
    description: 'Our institute organized a blood donation camp, addressing the critical need for blood in medical emergencies and supporting community healthcare.',
    images: [bloodDonate1, bloodDonate2, bloodDonate3]
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
    title: "Skill India Certificate Distribution",
    description: "The Skill India certificate distribution ceremony was organized at Niharika Foundation. In this ceremony, the deserving candidates were awarded with their certificates based on their qualifications. The event acknowledged the efforts and hardships of the trainees in achieving their qualifications.",
    images: [skillIndia1, skillIndia2, skillIndia3]
  },
  {
    title: "Industrial Visit at Ambarnath ITI",
    description: "The Industrial Visit at Ambarnath ITI was a valuable opportunity for our students to gain practical insights into the industrial processes and operations. This visit aimed to bridge the gap between theoretical knowledge and real-world applications by providing students with a firsthand experience of the industrial environment. It allowed them to witness the functioning of various machines, observe manufacturing processes, and interact with industry professionals.",
    images: [industrialVisit1, industrialVisit2, industrialVisit3]
  },
  {
    title: "Fit India Run India",
    description: "The Fit India Run India Marathon program was organized to promote fitness and encourage active participation in sports and physical activities. The program aimed to inspire individuals of all ages and fitness levels to engage in running and adopt a healthy and active lifestyle. The marathon featured different categories to accommodate participants of different age groups and fitness levels. The program emphasized the importance of regular physical exercise, promoting the Fit India movement initiated by the Government of India.",
    images: [fitIndia1, fitIndia2, fitIndia3]
  },
  {
    title: "Basic Electrician Course by Mumbai Urja Marg Team",
    description: "The Basic Electrician Course was organized by the Mumbai Urja Marg team to provide fundamental electrical skills to individuals interested in pursuing a career in electrical work. The course focused on essential electrical concepts, safety practices, and hands-on training to equip participants with the knowledge and confidence required to work in the electrical field. Participants learned about circuit wiring, electrical installations, troubleshooting, and maintenance of electrical systems. The course was designed to ensure that trainees understood both the theory and practical aspects of electrical work in real-world scenarios.",
    images: [urjaMarg1, urjaMarg2, urjaMarg3]
  },
  {
    title: "Free Hair Cutting Service Event",
    description: "As part of our social outreach program, we organized a free hair cutting service event for the Adivasi community. The event aimed to provide grooming services to individuals who may not have easy access to such facilities. Trained professionals volunteered their time to offer haircuts and facials, empowering the community by enhancing their personal grooming and boosting their confidence.",
    images: [hairCutting1, hairCutting2, hairCutting3]
  },
  {
    title: "Free Computer Lab Access and Digital Literacy Training",
    description: "In an effort to enhance digital literacy, we set up a free computer lab for the Adivasi community. The lab provided access to computers and internet resources, allowing individuals to learn essential digital skills. Workshops were conducted to teach the basics of computer usage, internet navigation, and other digital tools that are essential in today's world. This initiative aimed to empower the community with the knowledge needed to access information, improve employability, and stay connected.",
    images: [computerLab1, computerLab2, computerLab3]
  },
  {
    title: "Beautician Facial Services",
    description: "We organized health and wellness camps specifically for the Adivasi community, offering free medical check-ups, health consultations, and awareness programs on maintaining a healthy lifestyle. The camp included sessions on hygiene, nutrition, and preventive healthcare, aimed at promoting overall well-being and health education. Medical professionals from various fields volunteered to provide their expertise and support to improve the community's access to essential healthcare services.",
    images: [beautyFacial1, beautyFacial2, beautyFacial3]
  },
  {
    title: "Career Guidance Workshop, Tree Plantation Drive, Food Distribution and Tailoring Workshop",
    description: "The Career Guidance Workshop aimed to provide students with insights into various career paths and opportunities, helping them make informed decisions about their future. The Tree Plantation Drive was organized to promote environmental conservation and create awareness about the importance of planting trees. The Food Distribution initiative aimed to provide meals to underprivileged individuals and families, addressing issues of hunger and malnutrition. The Tailoring Workshop offered training in basic tailoring skills, empowering individuals with the knowledge to create and repair garments.",
    images: [workshop1, workshop2, workshop3, workshop4]
  },
  {
    title: "Emergency Training",
    description: "The Emergency Training was organized to provide students with the skills and knowledge to handle emergency situations effectively. The training included sessions on first aid, CPR, and other emergency procedures, helping students prepare for potential emergencies and respond appropriately in critical situations.",
    images: [emergencyTraining1, emergencyTraining2, emergencyTraining3]
  },
];
