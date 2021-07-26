// import './CurrentPlayer.scss';
import { Player, PlayerTitle, PlayerItem, PlayerInput } from './CurrentPlayer.styles';
const CurrentPlayer = ({ intentos, newGame }) => {

    if (!newGame) {
        return (

            <div>
                <Player >
                    <PlayerTitle >Current Player</PlayerTitle>
                    <PlayerItem>Name: Player #1</PlayerItem>
                    <PlayerItem># Attempts: {intentos}</PlayerItem>
                </Player>
            </div>
        )
    }

    else {
        return (
            <div>
                <Player>
                    <PlayerTitle>Please enter your name</PlayerTitle>
                    <PlayerInput type="text"></PlayerInput>

                </Player>
            </div>
        )
    }

};


export default CurrentPlayer;

