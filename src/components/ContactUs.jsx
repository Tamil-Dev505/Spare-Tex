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
import SendIcon from "@mui/icons-material/Send";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
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
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)", borderRadius: "50%", animation: "float 6s ease-in-out infinite" }} />
      <Box sx={{ position: "absolute", bottom: -50, left: -50, width: 250, height: 250, background: "radial-gradient(circle, rgba(76, 163, 255, 0.08) 0%, transparent 70%)", borderRadius: "50%", animation: "float 8s ease-in-out infinite" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            sx={{
              color: "#2563EB",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: 1,
              mb: 2,
              textTransform: "uppercase",
              animation: "slideInUp 0.6s ease-out",
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#1B2559",
              mb: 3,
              animation: "slideInUp 0.7s ease-out",
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
              animation: "slideInUp 0.8s ease-out",
            }}
          >
            Have questions about our textile machinery and spare parts? We're here to help. Reach out to us and we'll get back to you promptly.
          </Typography>
        </Box>

        {/* Contact Details and Form */}
        <Grid container spacing={5}>
          {/* Contact Details - LEFT */}
          <Grid item xs={12} md={5} sx={{ animation: "slideInUp 0.8s ease-out" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 4,
                      backgroundColor: "#fff",
                      borderRadius: 3,
                      border: "2px solid #E5E7EB",
                      display: "flex",
                      gap: 3,
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 50px rgba(37, 99, 235, 0.15)",
                        borderColor: "#2563EB",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        background: "linear-gradient(135deg, #2563EB 0%, #4CA3FF 100%)",
                        borderRadius: "50%",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: 60,
                        height: 60,
                      }}
                    >
                      <IconComponent sx={{ color: "#fff", fontSize: "1.8rem" }} />
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
                        {detail.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#666",
                          lineHeight: 1.7,
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

          {/* Contact Form - RIGHT */}
          <Grid item xs={12} md={7} sx={{ animation: "slideInUp 0.9s ease-out" }}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                backgroundColor: "#fff",
                borderRadius: 3,
                border: "2px solid #E5E7EB",
                background: "linear-gradient(135deg, #fff 0%, #F9FAFB 100%)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 20px 50px rgba(37, 99, 235, 0.1)",
                  borderColor: "#2563EB",
                },
              }}
            >
              {submitted && (
                <Box
                  sx={{
                    mb: 3,
                    p: 3,
                    backgroundColor: "#D1FAE5",
                    borderRadius: 2,
                    border: "1px solid #6EE7B7",
                    animation: "slideInUp 0.4s ease-out",
                  }}
                >
                  <Typography sx={{ color: "#065F46", fontWeight: 600 }}>
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </Typography>
                </Box>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 600, color: "#1B2559", mb: 1, fontSize: "0.95rem" }}>
                      Full Name *
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                            borderWidth: 2,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 600, color: "#1B2559", mb: 1, fontSize: "0.95rem" }}>
                      Email Address *
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="your@email.com"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                            borderWidth: 2,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 600, color: "#1B2559", mb: 1, fontSize: "0.95rem" }}>
                      Phone Number
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="+91 XXXXX XXXXX"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                            borderWidth: 2,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 600, color: "#1B2559", mb: 1, fontSize: "0.95rem" }}>
                      Subject *
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="How can we help?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                            borderWidth: 2,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#2563EB",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 600, color: "#1B2559", mb: 1, fontSize: "0.95rem" }}>
                      Message *
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Tell us more about your inquiry..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: "#2563EB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2563EB",
                            borderWidth: 2,
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
                      endIcon={<SendIcon />}
                      sx={{
                        background: "linear-gradient(135deg, #1B2559 0%, #2563EB 100%)",
                        color: "#fff",
                        fontWeight: 700,
                        py: 1.8,
                        borderRadius: 2,
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 15px 40px rgba(37, 99, 235, 0.3)",
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
