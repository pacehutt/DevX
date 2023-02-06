import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import colors from "../../config/colors";
import data from "../../data";

const ShowCase = ({ title = "EXPLORE OUR DEVx EVENTS" }) => {
  console.log(data.showCase);
  return (
    <Box
      sx={{
        width: "100%",
        padding: "4rem 0",
        borderBottom: "2px solid #fff3",
      }}
    >
      {/* <Typography
        variant="h4"
        color={"white"}
        sx={{
          margin: "3rem 0",
          marginBottom: "5rem",
          width: "100%",
          textAlign: "center",
          textTransform: "uppercase",
          // fontFamily: "verdana",
          fontWeight: "700",
          color: "#f5f5f5",
          fontSize: "50px",
          textShadow:
            "1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)",
        }}
      >
        {title}
      </Typography> */}

      <h1 className="textured-heading" style={{fontSize:"4rem"}}>{title}</h1>

      <Grid
        spacing={{
          xs: 4,
          sm: 4,
          md: 2,
        }}
        container
        sx={{
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        {data.showCase.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3.9}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: colors.light,
              gap: "10px",
            }}
            key={item.title}
          >
            <Box
              sx={{
                height: {
                  xs: "80px",
                  sm: "90px",
                  md: "100px",
                },
                width: "250px",
                width: {
                  xs: "30%",
                  sm: "30%",
                  md: "35%",
                },
                borderRadius: "10px",
              }}
            >
              <img
                src={item.imageUrl}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                color: colors.light,
                width: "60%",
              }}
            >
              <Typography variant="button" fontSize="12" color={"#fff9"}>
                {"0" + (index + 1)}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "15px",
                  textAlign: "left",
                  //   width: "70%",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "6px",
                  //   width: "70%",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowCase;
