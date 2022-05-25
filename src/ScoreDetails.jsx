import React, { useContext } from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import PlayerContext from './context';

const ScoreDetails = () => {
    const context = useContext(PlayerContext);
    return (
        <div>
            {
                context && context.selectedplayer && context.selectedplayer.score>=0 && 
                (<div className='mt-4'>
                                <Card>
                                    <CardBody>
                                    <CardTitle>SHOW DETAILS</CardTitle>
                                    <CardSubtitle>Match ID : {context.selectedplayer.matchId}</CardSubtitle>
                                    <CardText>
                                        <div> Player Name : {context.selectedplayer.playerName}</div>
                                        <div> Score : {context.selectedplayer.score}</div>
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </div>)

            }
        </div>
    );
}

export default ScoreDetails;
