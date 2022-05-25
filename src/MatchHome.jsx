import React, { useContext } from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import PlayerContext from './context';

const MatchHome = () => {
    const context = useContext(PlayerContext)
    
    const playerChangeHandler = (player) => {
        console.log("Player" ,player)
        context.onSetSelectedPlayer(player);
    }
    return (
        <div className='mt-5'>
            {
                context.players.length>0 
                
                ? 
                        <div>
                            {context.players.map(player => {
                                return (
                                    <div className='mt-3' key={player.matchId}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>Match ID : {player.matchId}</CardTitle>
                                                <Button onClick={() => playerChangeHandler(player)}>Show Details</Button>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                :
                <div className='mt-5'>
                            <h3 className='text-danger text-center'>No players Added. Please Add a Player</h3>
                        </div>
            }
        </div>
    );
}

export default MatchHome;
