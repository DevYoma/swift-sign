import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Reason from "./components/Reason/Reason";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Features />
      <Reason />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
