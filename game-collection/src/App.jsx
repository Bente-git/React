import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="games">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>

        <p>Naam: Bente Schutte</p>

        <p>Studentnummer: 2235343</p>

        <p>Klas: 25B</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
