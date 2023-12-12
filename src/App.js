import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Input from "./components/input/Input";
import Statistics from "./components/statistics/Statistics";
import Boost from "./components/boost/Boost";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Input />
      {/* <Statistics /> */}
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
