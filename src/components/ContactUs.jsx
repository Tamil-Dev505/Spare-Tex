import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactDetails = [
    {
      icon: LocationOnIcon,
      title: "Address",
      content: "5/204 Namakkal Main Road Kumaramangalam Tiruchengode Namakkal - 637 205 Tamil Nadu - India",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+91 95005 52100 & +91 97919 27577",
    },
    {
      icon: EmailIcon,
      title: "Email",
      content: "guna@sparetex.in",
    },
  ];

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
            Get In Touch
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#1B2559",
              mb: 3,
            }}
          >
            Contact Us
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
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </Box>

        {/* Contact Details and Form */}
        <Grid container spacing={4}>
          {/* Contact Details */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      border: "1px solid #E5E7EB",
                      display: "flex",
                      gap: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 10px 30px rgba(37, 99, 235, 0.1)",
                        borderColor: "#2563EB",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        backgroundColor: "#2563EB",
                        borderRadius: "50%",
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComponent sx={{ color: "#fff", fontSize: "1.5rem" }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#1B2559",
                          mb: 1,
                          fontSize: "1rem",
                        }}
                      >
                        {detail.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#666",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        {detail.content}
                      </Typography>
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: "#fff",
                borderRadius: 2,
                border: "1px solid #E5E7EB",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        backgroundColor: "#1B2559",
                        color: "#fff",
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: 1.5,
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#2563EB",
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 24px rgba(37, 99, 235, 0.3)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
