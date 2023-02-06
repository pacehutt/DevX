import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { Box, Typography } from "@mui/material";
import colors from "../../config/colors";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import fonts from "../../config/fonts";

function ImageCard({ image, title, description, phrase, action }) {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",

        boxShadow: "none",
        height: "80%",
        color: "white",
        margin: "2rem 0",
        borderBottom: "2px solid #fff3",
        "&:hover .card-header": {
          cursor: "pointer",
          transform: "translate3d(0, -50px, 0)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "10px",
          marginTop: "-3rem",
          marginLeft: "2rem",
          marginRight: "2rem",

          transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        }}
        className="card-header"
      >
        <Box
          component="img"
          src={image}
          alt={title}
          borderRadius="10px"
          shadow="md"
          sx={{
            height: {
              xs: "20rem",
              sm: "20rem",
              md: "100%",
            },
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
            },
            objectFit: "contain",
          }}
          position="relative"
          zIndex={1}
        />
        <Box
          borderRadius="lg"
          shadow="md"
          height="100%"
          position="absolute"
          left={0}
          top="0"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            backgroundBlendMode: "darken",
            backgroundSize: {
              xs: "contain",
              sm: "contain",
              md: "100%",
            },
            width: {
              xs: "0%",
              sm: "0%",
              md: "100%",
            },
          }}
        />
      </Box>
      <Box textAlign="center" pt={3} px={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={action ? -15 : -8.25}
          sx={{
            fontFamily: fonts.titleFont,
            letterSpacing: "0.2rem",
          }}
        >
          {phrase}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-start",
              md: "center",
            },
            alignItems: "center",

            gap: {
              xs: "0rem",
              sm: "0rem",
              md: "2rem",
            },
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="regular"
            sx={{
              mt: 4,
              width: {
                xs: "100%",
                sm: "90%",
                md: "30%",
              },
              fontFamily: "'Bebas Neue',Roboto",
              letterSpacing: "0.12rem",
              fontSize: {
                xs: "28px",
                sm: "35px",
                md: "48px",
              },
              textAlign: {
                xs: "left",
                sm: "left",
                md: "center",
              },
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              mt: {
                xs: 0,
                sm: 1,
                md: 4,
              },
              mb: 1,
              width: {
                xs: "100%",
                sm: "90%",
                md: "50%",
              },
              padding: {
                xs: "0.5rem 0rem",
                sm: "1rem 0rem",
                md: "4rem 2rem",
              },

              fontSize: "16px",
              textAlign: "left",
            }}
          >
            <DoubleArrowIcon fontSize="large"></DoubleArrowIcon>
            <DoubleArrowIcon fontSize="large"></DoubleArrowIcon>
            <Typography
              sx={{
                padding: "0rem",
                paddingLeft: "4px",
              }}
              color="text"
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Card>
  );
}

export default ImageCard;
