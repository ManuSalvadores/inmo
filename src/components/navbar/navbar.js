import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Li, IconContainer } from "./navbar.styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "black",
  },
  iconButton: {
    color: "white",
    border: "none",
    margin: "auto",
    cursor: "pointer",
    transition: "0.4s",
    "&:hover": {
      color: "red",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.navBar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inhrederit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            KON Propiedades
          </Typography>
          <IconContainer>
            <IconButton
              className={classes.iconButton}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>{" "}
            <IconButton
              className={classes.iconButton}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <WhatsAppIcon />
            </IconButton>
          </IconContainer>
          <Li>Alquileres</Li>
          <Li>Ventas</Li>
          <Li>Tasaciones</Li>
          <Li>Novedades</Li>
          <Li>Contacto</Li>
        </Toolbar>
      </AppBar>
    </div>
  );
}
