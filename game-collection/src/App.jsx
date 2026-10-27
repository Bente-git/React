import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

const games = [
  {
    id: 1,
    title: "Minecraft",
    platform: "PC",
  },
  {
    id: 2,
    title: "Mario Kart",
    platform: "Nintendo Switch",
  },
  {
    id: 3,
    title: "Rocket League",
    platform: "PlayStation 5",
  },
  {
    id: 4,
    title: "Genshin Impact",
    platform: "PC",
  },
];

function App() {
  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>

        <p>Naam: Bente Schutte</p>

        <p>Studentnummer: 2235343</p>

        <p>Klas: 25B</p>

        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            platform={game.platform}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;