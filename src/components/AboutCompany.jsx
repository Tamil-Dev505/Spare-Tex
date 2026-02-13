import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from "@mui/material";

export default function AboutCompany() {

  return (
    <Box>
      {/* SECTION 1: TEXT CONTENT */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F4F6FA" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  sx={{
                    color: "#2563EB",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: 1,
                    mb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  About Spare Tex
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#1B2559",
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Leading Supplier of Textile Machinery & Spare Parts
                </Typography>

                <Typography
                  sx={{
                    color: "#555",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  <strong>Spare Tex</strong> is a trusted retail trading company
                  established in 2017, specializing in the supply of high-quality
                  Rapier Loom Machines, Rapier Loom Spare Parts, and a comprehensive
                  range of textile machinery components.
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  With a strong commitment to quality, reliability, and customer
                  satisfaction, we support textile manufacturers by delivering
                  durable and efficient machine parts that meet and exceed industry
                  standards.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#1B2559",
                    color: "#fff",
                    fontWeight: 700,
                    px: 4,
                    "&:hover": {
                      backgroundColor: "#2563EB",
                    },
                  }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 2: TWO IMAGES CONTAINER */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {/* LEFT IMAGE */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src="/machine1.jpg"
                  alt="Textile Machinery"
                  sx={{
                    width: "100%",
                    maxWidth: 375,
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    borderRadius: 3,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src="/machine2.jpg"
                  alt="Industrial Control Panel"
                  sx={{
                    width: "100%",
                    maxWidth: 375,
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    borderRadius: 3,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
