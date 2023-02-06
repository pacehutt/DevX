import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/gdsc1.png";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "2rem 0",
        color: "white",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <Box>
          <img
            src={logo}
            alt="gdsc"
            style={{
              height: "60px",
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <LanguageIcon
            fontSize="medium"
            sx={{
              cursor: "pointer",
            }}
          />
          <InstagramIcon
            fontSize="medium"
            sx={{
              cursor: "pointer",
            }}
          />
          <FacebookIcon
            fontSize="medium"
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          margin: "2rem 0",
          padding: "1rem 0",
        }}
      >
        <Typography variant={"body1"} fontSize={13} textAlign="center">
          © 2023 Google Developers Student Clubs Techno India University. All
          rights reserved.
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
