import styled from "styled-components";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

  @media(max-width: 600px){
    flex-direction: column;
}
`;

export const SocialMediaAndlinks = styled.div`
  display: flex;
`;

export const Li = styled(Button)`
color: white;
border: none;
margin: 10;
width: 100;
height: 65;
border-radius: 6;
text-transform: uppercase;
cursor: pointer;
transition: 0.4s;
&:hover {
    color: red;
}
`;

export const IconContainer = styled.div`
display: block;
@media(max-width: 600px){
    display: none;
}
`;

export const IconStyled = styled(IconButton)`
color: white;
border: none;
margin: auto;
cursor: pointer;
transition: 0.4s;
&:hover {
  color: red;
`;

export const NavBarStyled = styled(AppBar) `
background-color: black;
`;
