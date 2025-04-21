import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import StarsBackground from "./Components/StarsBackground"; // Import the StarsBackground component
import Certificate from "./Components/Certifications/Certificates";
import Achievements from "./Components/Achievements/Achievements";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <StarsBackground /> {/* Apply the background everywhere */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="bg-transparent h-auto w-full overflow-hidden">
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Certificate />
          <Achievements/>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;