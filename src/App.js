import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerContext from './context';
import { useState } from 'react';
import Addscore from './Addscore';
import MatchHome from './MatchHome';
import ScoreDetails from './ScoreDetails';

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  const onChangePlayers = (players) => {
    setPlayers(players)
  }

  const onSelectedPlayerChange = (player) => {
    setSelectedPlayer(player)
  }

  return (
    <PlayerContext.Provider value={{
        players: players,
        onSetPlayers: onChangePlayers,
        selectedplayer: selectedPlayer,
        onSetSelectedPlayer : onSelectedPlayerChange
    }}>
      <div className='app-container'>
        <h1 className='text-center'>Score Keeper</h1>
        <div className='mt-3'>
          <Addscore></Addscore>
          <ScoreDetails />
          <MatchHome/>
        </div>
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
