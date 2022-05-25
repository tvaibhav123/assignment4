import { createContext } from "react";


const PlayerContext = createContext({
    players: [],
    onSetPlayers : () => {},
    selectedplayer : {},
    onSetSelectedPlayer : ()=> {}
})

export default PlayerContext;