import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/Hero";
import FormInput from "./components/Form/FormInput";
import AdvancedCard from "./components/AdvancedStatistics/AdvancedStatisticsCard/AdvancedStatisticsCard";
import Action from "./components/ActionSection/Action";
import Footer from "./components/Footer/Footer";
import CardSection from "./components/AdvancedStatistics/CardSection/CardSection";
import LinkCards from "./components/LinksCard/LinksCard";
import "./styles/font.css";

function App() {
  const [links, setLinks] = useState([]);

  const addToLinks = (link) => {
    setLinks((prev) => [link, ...prev]);
  };

  return (
    <div className="app">
      <NavBar />
      <div>
        <HeroSection />
      </div>
      <div className="statistics-container">
        <FormInput addToLinks={addToLinks} />
        <LinkCards links={links} />
        <AdvancedCard />
        <CardSection />
      </div>
      <div>
        <Action />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
