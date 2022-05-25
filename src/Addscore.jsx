import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Input, Alert } from 'reactstrap';
import PlayerContext from './context';

const Addscore = () => {
    const context = useContext(PlayerContext);

    const [matchId, setMatchId] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        console.log("CONTEXT PLAYERS ", context.players)
    }, [context]);

    const matchIdHandler =(event) => {
        setMatchId(event.target.value)
    }
    const playerNameHandler =(event) => {
        setPlayerName(event.target.value)
    }
    const scoreHandler =(event) => {
        setScore(event.target.value)
    }

    const isMatchIdUnique = () => {
        if(context.players.length>0) {
            const foundPlayer = context.players.filter(player => {
                return player.matchId == matchId
            })
            console.log("Found Player ", foundPlayer)
            if(foundPlayer.length>0){
                setError("Match ID is Not unique")
                return false
            }else {
                return true
            }
        }
        return true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if(matchId.length>0 && playerName.length>0 && score>0 && isMatchIdUnique()){
            setError("")
            const playerInfo = {
                matchId : matchId,
                score: score, 
                playerName: playerName
            }
            
            setPlayers([...players, playerInfo])
            context.onSetPlayers([...players, playerInfo])
        }
    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <label htmlFor='matchId'>Match ID</label>
                <Input type='text' 
                    value={matchId}
                    name="matchId"
                    id="matchId"
                    onChange={matchIdHandler}
                />

                <label htmlFor='playerName'>Player Name</label>
                <Input type='text' 
                    value={playerName}
                    name="playerName"
                    id="playerName"
                    onChange={playerNameHandler}
                />

                <label htmlFor='score'>Score</label>
                <Input type='text' 
                    value={score}
                    name="score"
                    id="score"
                    onChange={scoreHandler}
                />
                <Button type="submit" color='primary' className='mt-2'>Add Match</Button>
            </Form> 
            {error.length>0 && <Alert color="danger">
                {error}
            </Alert>}
        </div>
    );
}

export default Addscore;
