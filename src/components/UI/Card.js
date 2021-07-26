import ReactCardFlip from 'react-card-flip';
import arrayCards from '../../helpers/arrayCards';
// import './Card.scss';
import { useEffect } from 'react';
import {
    BackgoundWrapper,
    BackgoundWrapperHr,
    CardFlip,
    CardContainer,
    CardIcon
} from './Card.styles';

const Card = ({ arrDeCartas,
    comparacion,
    reset,
    setArrDeCartas,
    setearBuscando
}) => {

    useEffect(() => {
        setArrDeCartas(arrayCards().map((card, i) => ({ ...card, i: i })));

    }, [reset]);



    return (
        <BackgoundWrapper >
            <BackgoundWrapperHr />
            <CardFlip >
                {arrDeCartas.map((card, i) =>

                    <ReactCardFlip key={i} isFlipped={card.flipped} flipDirection="vertical">
                        <CardContainer guessed={card.adivinada} onClick={() => comparacion.length < 2 && setearBuscando(card)} />
                        <CardContainer guessed={card.adivinada} onClick={() => comparacion.length < 2 && setearBuscando(card)}  >
                            <div >
                                <CardIcon className={`fa ${card.icono} fa-5x`} />
                            </div>
                        </CardContainer>

                    </ReactCardFlip>
                )
                }
            </CardFlip >
        </BackgoundWrapper >
    )
}

export default Card;

