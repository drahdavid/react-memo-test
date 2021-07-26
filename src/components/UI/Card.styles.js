import styled, { css } from "styled-components";


const guessedCard = css`
transition: 1s;
background-color: rgb(110, 243, 201);
`;

const guessedCardFunc = props => {
    if (props.guessed) return guessedCard;
    else return '';
};


export const BackgoundWrapper = styled.div`
height: 750px;
background-color: black;
`;

export const BackgoundWrapperHr = styled.hr`
margin-bottom: 40px;
`;


export const CardFlip = styled.div`
width: 800px;
height: 500px;
display: flex;
flex-wrap: wrap;
margin-left: 100px;
`;


export const CardContainer = styled.div`
text-align: center;
background-color: rgb(69, 69, 159);;
margin: 10px;
width: 130px;
height: 130px;
${guessedCardFunc}; 
`;

export const CardIcon = styled.i`
padding-top: 25px;
padding-left: 5px;
`
