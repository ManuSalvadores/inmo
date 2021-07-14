import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActionArea,
  Price,
  description,
  IconsContainer,
  IconContainer,
} from "./card.styles";

function MediaCard({ img, tittle, description, price }) {
  return (
    <>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia image={img} title={tittle} />
          <CardContent>
            <Price gutterBottom variant="h6" component="p">
              ${price}
            </Price>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </StyledCardActionArea>
        <IconsContainer>
          <IconContainer>
            <Icon name="bed" />
            <span>Habitaciones</span>
          </IconContainer>
          <IconContainer>
            <Icon name="bath" />
            <span>Banio</span>
          </IconContainer>
          <IconContainer>
            <Icon name="m2" />
            <span>m2</span>
          </IconContainer>
          <IconContainer>
            <Icon name="car" />
            <span>Cochera</span>
          </IconContainer>
        </IconsContainer>
      </StyledCard>
    </>
  );
}

MediaCard.propTypes = {
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
};

export default MediaCard;
