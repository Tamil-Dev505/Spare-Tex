import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { CheckCircle, LocalShipping, Group, EmojiEvents } from "@mui/icons-material";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 800,
          background: "linear-gradient(135deg, #2563EB 0%, #4CA3FF 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        {count}+
      </Typography>
      <Typography sx={{ color: "#666", fontWeight: 600, fontSize: "0.95rem" }}>
        {label}
      </Typography>
    </Box>
  );
};

export default function AboutCompany() {
  const milestones = [
    { year: "2017", title: "Founded", description: "Spare Tex established as a trusted textile supplier" },
    { year: "2019", title: "Expansion", description: "Expanded product range and customer base" },
    { year: "2021", title: "Growth", description: "Achieved 500+ satisfied customers" },
    { year: "2024", title: "Excellence", description: "Leading supplier in textile machinery" },
  ];

  const stats = [
    { value: 500, label: "Happy Clients" },
    { value: 1000, label: "Products Supplied" },
    { value: 7, label: "Years Experience" },
    { value: 50, label: "Team Members" },
  ];

  const features = [
    { icon: CheckCircle, title: "Quality Assured", description: "Industry-standard products" },
    { icon: LocalShipping, title: "Fast Delivery", description: "Quick turnaround times" },
    { icon: Group, title: "Expert Support", description: "Dedicated customer service" },
    { icon: EmojiEvents, title: "Certified", description: "ISO certified operations" },
  ];

  return (
    <Box>
      {/* SECTION 1: TEXT CONTENT */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: "linear-gradient(135deg, #F4F6FA 0%, #E8F0FF 100%)", position: "relative", overflow: "hidden" }}>
        {/* Animated background elements */}
        <Box sx={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)", borderRadius: "50%", animation: "float 6s ease-in-out infinite" }} />
        
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ animation: "slideInUp 0.8s ease-out" }}>
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
                  Leading Supplier of Textile Machinery & Spare Accessories
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
                  durable and efficient machine Accesories that meet and exceed industry
                  standards.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #1B2559 0%, #2563EB 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    px: 4,
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 40px rgba(37, 99, 235, 0.3)",
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



      {/* Add keyframe animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Box>
  );
}
