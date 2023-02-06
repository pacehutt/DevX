import React from "react";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../config/colors";

import data from "../../data";

const FAQ = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        boxShadow: 1,
        color: "white",
        padding: {
          xs: "0.5rem",
          sm: "2rem",
        },
        borderRadius: "10px",
        background: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.26) 0px 1px 20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "1rem",
          padding: "1rem",
        }}
      >
        FAQs
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          borderRadius: "10px",
        }}
      >
        {data.faqs.map((faq, index) => {
          return (
            <Accordion
              sx={{
                background: "transparent",
                color: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="white" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  borderRadius: "10px",
                }}
              >
                <Typography>
                  {index + 1}. {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: "1px solid gray",

                  borderRadius: "10px",
                }}
              >
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default FAQ;
