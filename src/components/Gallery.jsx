import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Dialog,
  IconButton,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Close, ZoomIn } from "@mui/icons-material";

const galleryItems = [
  {
    title: "Picanol Rapier Machine",
    description: "High-performance weaving machine for premium textile production",
    image: "/gallery.jpg",
    category: "Machines",
  },
  {
    title: "SOMET Rapier Machine",
    description: "Advanced automation for efficient loom operations",
    image: "/gallery1.jpg",
    category: "Machines",
  },
  {
    title: "GA74 Chinese Rapier Machine",
    description: "Cost-effective solution for textile manufacturing",
    image: "/gallery2.jpg",
    category: "Machines",
  },
  {
    title: "Oil Changed Service",
    description: "Regular maintenance service for optimal machine performance",
    image: "/gallery3.jpg",
    category: "Services",
  },
  {
    title: "Handle Repair Service",
    description: "Expert repair and restoration of machine components",
    image: "/gallery4.jpg",
    category: "Services",
  },
  {
    title: "Engine Repair Service",
    description: "Complete engine servicing and refurbishment",
    image: "/gallery5.jpg",
    category: "Services",
  },
 
];

export default function Gallery() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F9FAFB" }}>
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
            Our Products
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#1B2559",
              mb: 3,
            }}
          >
            Showcase of Our Work
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: "1.1rem",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Explore our collection of textile machinery installations and service
            highlights, demonstrating our expertise and commitment to excellence
          </Typography>
        </Box>

        {/* Gallery Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {galleryItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "1/1",
                backgroundColor: "#f0f0f0",
                borderRadius: 3,
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 20px 50px rgba(37,99,235,0.15)",
                },
              }}
              onClick={() => handleImageClick(item)}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              {/* Hover Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(27, 37, 89, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#2563EB",
                    borderRadius: "50%",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ZoomIn sx={{ color: "#fff", fontSize: 32 }} />
                </Box>
              </Box>

              {/* Category Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: "#2563EB",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {item.category}
              </Box>
            </Box>
          ))}
        </Box>

        {/* View All CTA Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#1B2559",
              color: "#fff",
              fontWeight: 700,
              px: 6,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#2563EB",
                transform: "translateY(-3px)",
                boxShadow: "0 12px 24px rgba(37, 99, 235, 0.3)",
              },
            }}
          >
            View All Gallery
          </Button>
        </Box>
      </Container>

      {/* Image Dialog Modal */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: 3,
            backgroundColor: "#fff",
          },
        }}
      >
        {selectedImage && (
          <Box>
            {/* Close Button */}
            <Box
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 1,
              }}
            >
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  backgroundColor: "#1B2559",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#2563EB",
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>

            {/* Image */}
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <CardMedia
                component="img"
                image={selectedImage.image}
                alt={selectedImage.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <CardContent sx={{ p: 4 }}>
              <Typography
                sx={{
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: 1,
                  mb: 1,
                  textTransform: "uppercase",
                }}
              >
                {selectedImage.category}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#1B2559",
                  mb: 2,
                }}
              >
                {selectedImage.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                {selectedImage.description}
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: "#1B2559",
                  color: "#fff",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#2563EB",
                  },
                }}
              >
                Contact Us for More Info
              </Button>
            </CardContent>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
