import { Box, Container, Typography, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  {
    title: "User-Friendly Installation",
    description:
      "Our products are designed for easy and hassle-free installation, helping reduce setup time and ensuring smooth integration with existing textile machinery.",
  },
  {
    title: "Industry-Compliant",
    description:
      "All our machinery and spare parts meet industry standards, ensuring reliability, safety, and consistent performance in demanding textile operations.",
  },
  {
    title: "Trusted Performance",
    description:
      "Backed by proven quality and dependable sourcing, our products deliver long-lasting performance that textile manufacturers can rely on for uninterrupted production.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            Why Choose
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#1B2559",
              mb: 3,
            }}
          >
            Where Quality Meets Performance
          </Typography>
        </Box>

        {/* Content Grid */}
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src="/machine.jpg"
                alt="Electronic Circuit Board"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* Features Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ pl: { xs: 0, md: 4 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#1B2559",
                  mb: 4,
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                }}
              >
                Why Choose Us
              </Typography>

              {features.map((feature, index) => (
                <Box key={index} sx={{ mb: 4, display: "flex", gap: 3 }}>
                  <Box
                    sx={{
                      flexShrink: 0,
                      pt: 0.5,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#2563EB",
                        fontSize: "1.8rem",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#1B2559",
                        mb: 1,
                        fontSize: "1.1rem",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#666",
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
