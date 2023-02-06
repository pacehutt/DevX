import React from "react";
import ImageCard from "../../components/Homepage/Card";
import FAQ from "../../components/Homepage/FAQ";
import data from "../../data";
import Footer from "../../components/Homepage/Footer";
import ShowCase from "../../components/Homepage/ShowCase";
import Navbar from "../../components/Homepage/Navbar";
import HeroSection from "../../components/Homepage/HeroSection";
import { Box } from "@mui/system";
import "./Homepage.scss";
import Carousel from "../../components/Homepage/Carousel";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Box
        sx={{
          padding: "2rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Roboto', sans-serif",
          padding: {
            xs: " 0rem 1rem",
            sm: "0rem 2rem",
            md: "0rem 10rem",
          },
        }}
      >
        <ShowCase></ShowCase>
        <Box>
          <ImageCard
            image={data.section1.image}
            title={data.section1.title}
            description={data.section1.description}
            phrase={data.section1.phrase}
          />
        </Box>
        <a id="faqs">
          <FAQ />
        </a>

        <Footer></Footer>
      </Box>
    </>
  );
};

export default Homepage;
