import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import games from "./data/games.json";

function App() {
  const [search, setSearch] = useState("");

  const searchText = search.toLowerCase();

  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchText) ||
      game.genre.toLowerCase().includes(searchText) ||
      game.platform.toLowerCase().includes(searchText) ||
      game.developer.toLowerCase().includes(searchText)
  );

  return (
    <div className="container">
      <Header
        title="🎮 Ultimate Game Collection"
        slogan="Al mijn favoriete games op één plek"
      />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>

        <p>Naam: Bente Schutte</p>

        <p>Studentnummer: 2235343</p>

        <p>Klas: 25B</p>

        <input
          className="search-input"
          type="text"
          placeholder="Zoek op titel, genre, platform of developer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cards">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              rating={game.rating}
              year={game.year}
              developer={game.developer}
              multiplayer={game.multiplayer}
              image={game.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;