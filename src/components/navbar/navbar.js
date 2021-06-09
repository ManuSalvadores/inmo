import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Li, IconContainer, IconStyled, NavBarStyled } from "./navbar.styles";

export default function Navbar() {

  return (
    <>
      <NavBarStyled position="fixed">
        <Toolbar>
          <IconStyled
            edge="start"          
            color="inhrederit"
            aria-label="menu"
          ></IconStyled>
          <Typography variant="h6">
            KON Propiedades
          </Typography>
          <IconContainer>
            <IconStyled
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <InstagramIcon />
            </IconStyled>
            <IconStyled
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <FacebookIcon />
            </IconStyled>
            <IconStyled
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <WhatsAppIcon />
            </IconStyled>
          </IconContainer>
          <Li>Alquileres</Li>
          <Li>Ventas</Li>
          <Li>Tasaciones</Li>
          <Li>Novedades</Li>
          <Li>Contacto</Li>
        </Toolbar>
      </NavBarStyled>
    </>
  );
}
