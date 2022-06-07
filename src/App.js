import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/Hero";
import FormInput from "./components/Form/FormInput";
import AdvancedCard from "./components/AdvancedStatistics/AdvancedStatisticsCard/AdvancedStatisticsCard";
import Action from "./components/ActionSection/Action";
import Footer from "./components/Footer/Footer";
import "./styles/font.css";
import CardSection from "./components/AdvancedStatistics/CardSection/CardSection";
function App() {
  return (
    <div className="app">
      <NavBar />
      <div>
        <HeroSection />
      </div>
      <div>
        <FormInput />

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
