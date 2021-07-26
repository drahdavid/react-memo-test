import styled from "styled-components";


export const Menu = styled.nav`
width: 100%;
height: 100px;
background-color: rgb(7, 6, 6);
`;

export const MenuLogo = styled.img`
width: 150px;
margin-top: 20px;
margin-left: 35px;

`;


export const MenuUl = styled.ul`
margin-top: 35px;
float: right;

`;

export const MenuItem = styled.li`

font-family:Verdana, Geneva, Tahoma, sans-serif;
text-align: center;
display: inline-block;
width: 150px;
height: 25px;
border-radius: 5px;
color: white;
margin-right: 60px;
cursor: pointer;
&:active{
    padding: 2px;
    box-shadow: 1px 1px 5px 5px #666;
    transform: translateY(4px);
}
`;