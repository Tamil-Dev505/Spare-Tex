import { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Grid, Stack, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, ArrowRightAlt } from "@mui/icons-material";
import { heroBackgrounds } from "./heroBackgrounds";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setBgIndex((prev) => (prev - 1 + heroBackgrounds.length) % heroBackgrounds.length);
  };

  const handleNext = () => {
    setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 500, md: 700 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        mt: { xs: 8, md: 0 },
      }}
    >
      {/* Background slider images */}
      {heroBackgrounds.map((bg, idx) => (
        <Box
          key={bg}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: bgIndex === idx ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Overlay gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(27, 37, 89, 0.85) 0%, rgba(27, 37, 89, 0.6) 40%, rgba(0, 0, 0, 0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: { xs: 12, md: 30 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: "rgba(76, 163, 255, 0.2)",
          color: "#fff",
          width: 50,
          height: 50,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#4CA3FF",
            transform: "translateY(-50%) scale(1.1)",
          },
        }}
      >
        <ChevronLeft sx={{ fontSize: "1.8rem" }} />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: 12, md: 30 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: "rgba(76, 163, 255, 0.2)",
          color: "#fff",
          width: 50,
          height: 50,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#4CA3FF",
            transform: "translateY(-50%) scale(1.1)",
          },
        }}
      >
        <ChevronRight sx={{ fontSize: "1.8rem" }} />
      </IconButton>

      {/* Slider Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 40 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
          zIndex: 3,
        }}
      >
        {heroBackgrounds.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setBgIndex(idx)}
            sx={{
              width: bgIndex === idx ? 32 : 10,
              height: 10,
              backgroundColor: bgIndex === idx ? "#4CA3FF" : "rgba(255, 255, 255, 0.4)",
              borderRadius: 5,
              cursor: "pointer",
              transition: "all 0.4s ease",
              "&:hover": {
                backgroundColor: bgIndex === idx ? "#4CA3FF" : "rgba(255, 255, 255, 0.7)",
              },
            }}
          />
        ))}
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(76, 163, 255, 0.15)",
                border: "1px solid rgba(76, 163, 255, 0.3)",
                borderRadius: 3,
                px: 2.5,
                py: 1,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#4CA3FF",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                ✨ Premium Textile Solutions
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: { xs: "2.2rem", md: "3.5rem" },
                fontWeight: 900,
                lineHeight: 1.15,
                mb: 3,
                color: "#fff",
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              }}
            >
              High-Performance{" "}
              <Box component="span" sx={{ color: "#4CA3FF" }}>
                Weaving Machinery
              </Box>
              {" "}& Parts
            </Typography>

            {/* Subheading */}
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: "#E0E0E0",
                mb: 4,
                lineHeight: 1.8,
                maxWidth: 550,
                textShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              Industry-leading textile machinery, precision spare parts, and bearings engineered for maximum performance and reliability in demanding production environments.
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRightAlt />}
                sx={{
                  backgroundColor: "#4CA3FF",
                  color: "#fff",
                  fontWeight: 700,
                  px: 4,
                  py: 1.8,
                  fontSize: "1rem",
                  borderRadius: 1.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2563EB",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 24px rgba(76, 163, 255, 0.4)",
                  },
                }}
              >
                Explore Products
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  fontWeight: 700,
                  px: 4,
                  py: 1.8,
                  fontSize: "1rem",
                  borderRadius: 1.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#4CA3FF",
                    color: "#4CA3FF",
                  },
                }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Grid>

          {/* Right Side - Stats Cards */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {[
                { number: "20+", label: "Years of Excellence", icon: "🏆" },
                { number: "5000+", label: "Machines Delivered", icon: "⚙️" },
                { number: "100+", label: "Industrial Partners", icon: "🤝" },
              ].map((stat, idx) => (
                <Grid item xs={12} key={idx}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: 2,
                      p: 2.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(76, 163, 255, 0.15)",
                        borderColor: "rgba(76, 163, 255, 0.3)",
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography sx={{ fontSize: "2rem" }}>{stat.icon}</Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "1.8rem",
                            fontWeight: 800,
                            color: "#4CA3FF",
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#B0B9D4",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
