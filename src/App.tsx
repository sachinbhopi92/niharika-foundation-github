import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AwardsRecognition from "./pages/AwardsRecognition";
import Teachers from "./pages/Teachers";
import Achievements from "./pages/Achievements";
import NotFoundPage from "./pages/NotFound";

// Component to set dynamic background
const PageWrapper: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-6 bg-cover bg-center">
      <div className="container mx-auto bg-white bg-opacity-90 shadow-lg rounded-lg p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<AwardsRecognition />} />
          <Route path="/placement" element={<Achievements />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <PageWrapper />
      <Footer />
    </Router>
  );
};

export default App;
