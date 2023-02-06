import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import image from "../../../assets/cover.jpeg";
import colors from "../../../config/colors";

import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../../assets/DeVx.svg";

function Cover() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <Box>
      <Box
        width="calc(100% - 2rem)"
        minHeight={"200px"}
        mx={2}
        my={2}
        pt={6}
        pb={28}
        sx={{
          backgroundImage: `url(https://png.pngtree.com/background/20210715/original/pngtree-gradient-purple-aiming-system-abstract-technology-background-picture-image_1258390.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          minHeight: "200px",
          // zIndex: -1,
        }}
      />
      <Box
        mt={{ xs: -20, lg: -18 }}
        px={1}
        width="calc(100% - 2rem)"
        mx="auto"
        sx={{
          borderRadius: "15px",
        }}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{
            borderRadius: "15px",
          }}
        >
          <Grid
            item
            xs={11}
            sm={9}
            md={5}
            lg={4}
            xl={3}
            sx={{
              borderRadius: "10px",
            }}
          >
            <Card
              sx={{
                overflow: "visible",
                borderRadius: "10px",
                background: "#ffffffed",
              }}
            >
              <Box
                variant="gradient"
                sx={{
                  background: colors.bgGrad,
                  borderRadius: "10px",
                  position: "relative",
                  bottom: "1.5rem",
                  zIndex: 2,
                }}
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={1}
                textAlign="center"
              >
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "150px",
                  }}
                />
                <Typography
                  display="block"
                  variant="button"
                  color="white"
                  my={1}
                >
                  Let's get started
                </Typography>
              </Box>
              <Box pt={4} pb={3} px={3}>
                <Box component="form" role="form">
                  <Box
                    mb={2}
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      fullWidth
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                      fullWidth
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  </Box>

                  <Box
                    mt={4}
                    mb={1}
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        borderRadius: "10px",
                        background: colors.bgGrad,
                        fontSize: "13px",
                      }}
                    >
                      sign in
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        borderRadius: "10px",
                        // background: colors.bgGrad,
                      }}
                    >
                      <GoogleIcon></GoogleIcon>
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        borderRadius: "10px",
                        background: "black",
                        "&:hover": {
                          background: "#2D2D2D",
                        },
                      }}
                    >
                      <GitHubIcon></GitHubIcon>
                    </Button>
                  </Box>
                  <Box
                    mt={3}
                    mb={1}
                    textAlign="center"
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    <Typography variant="button" color="text" fontSize={"12px"}>
                      Don&apos;t have an account?{" "}
                      <Typography
                        component={Link}
                        to="/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        fontSize={"12px"}
                      >
                        Sign up
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Cover;
