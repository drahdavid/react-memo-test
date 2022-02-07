import styled from "styled-components";

export const Player = styled.div`
border: 1px solid white;
color: white;
position: absolute;
right: 60px;
display: flex;
flex-direction: column;
width: 300px;
top: 150px;
height: 150px;
`;

export const PlayerTitle = styled.h3
    `    
margin-top: 20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`;


export const PlayerItem = styled.p`

font-family: Verdana, Geneva, Tahoma, sans-serif;
margin-left: 20px;
`;

export const PlayerInput = styled.input`

width: 80%;
`;
