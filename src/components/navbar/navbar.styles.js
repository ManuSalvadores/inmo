import styled from "styled-components";
import Button from "@material-ui/core/Button";

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
`
