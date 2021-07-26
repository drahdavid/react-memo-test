// import './PositionTable.scss';
import playerScore from './players-api/players';
import { Position, PositionTitle, PositionContainer, PositionItem, PositionItemScore } from '../PositionTable.styles';
import { useEffect, useState } from 'react';
const PositionTable = () => {

    const [score, setScore] = useState([])

    useEffect(() => {
        playerScore()
            .then(el => setScore(el.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <Position>
                <PositionTitle >Position Table</PositionTitle>
                <PositionContainer>
                    {score.map((el, i) =>
                        <div key={el.id}>
                            <PositionItem >Player #{i + 1}</PositionItem >
                            <PositionItemScore>{el.score}</PositionItemScore>
                        </div>)}


                </PositionContainer>



            </Position>

        </div>
    )

}

export default PositionTable;

