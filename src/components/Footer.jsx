import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerCategories = {
    textileParts: {
      title: "TEXTILE MACHINERY PARTS",
      items: [
        "Rapier Loom Spare Parts",
        "Jacquard Spare Parts",
        "Common Replacement Parts",
        "Dobby Spare Parts",
        "Parts by Brand",
        "Projectile Loom Spare Parts",
      ],
    },
    weavingMachinery: {
      title: "WEAVING MACHINERY",
      items: [
        "Jacquard Machine",
        "High Speed Rapier Loom",
        "Low Speed Rapier Loom",
        "Jacquard Loom",
        "Towel Loom",
        "Industrial Fabric Loom",
        "Air Jet Loom",
        "Water Jet Loom",
      ],
    },
    weavingRelated: {
      title: "WEAVING RELATED MACHINERY",
      items: [
        "Rapier Loom Panel Control Box",
        "Warping Machine",
        "Automatic Drawing-in Machine",
        "Automatic Warp Tying Machine",
        "Warp Beam Storage System",
        "Fabric Rolling and Inspection",
        "Beam Trolley and Truck",
        "Ultrasonic Fabric Cutting",
        "Sizing Machine",
        "Water Jet Loom Panel Control Box",
      ],
    },
    usedLooms: {
      title: "USED WEAVING LOOMS",
      items: [
        "Second Hand Machine",
        "Reconditioned Machine",
        "Sell Your Machines",
      ],
    },
  };

  const socialLinks = [
    { icon: FacebookIcon, link: "#", label: "Facebook" },
    { icon: TwitterIcon, link: "#", label: "Twitter" },
    { icon: PinterestIcon, link: "#", label: "Pinterest" },
    { icon: LinkedInIcon, link: "#", label: "LinkedIn" },
  ];

  return (
    <Box sx={{ backgroundColor: "#1B2559", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)", borderRadius: "50%", animation: "float 6s ease-in-out infinite" }} />
      <Box sx={{ position: "absolute", bottom: -50, left: -50, width: 250, height: 250, background: "radial-gradient(circle, rgba(76, 163, 255, 0.08) 0%, transparent 70%)", borderRadius: "50%", animation: "float 8s ease-in-out infinite" }} />

      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {/* Textile Machinery Parts */}
            <Grid item xs={12} sm={6} md={3} sx={{ animation: "slideInUp 0.6s ease-out" }}>
              <Box sx={{ pb: 3, borderBottom: "2px solid rgba(76, 163, 255, 0.3)", transition: "all 0.3s ease", "&:hover": { borderBottomColor: "#4CA3FF" } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    mb: 3,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#fff",
                    background: "linear-gradient(135deg, #fff 0%, #4CA3FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {footerCategories.textileParts.title}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {footerCategories.textileParts.items.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        color: "#B0B9D4",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:before": {
                          content: '"→"',
                          color: "#4CA3FF",
                          opacity: 0,
                          transition: "all 0.3s ease",
                        },
                        "&:hover": {
                          color: "#4CA3FF",
                          pl: 1,
                          "&:before": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Weaving Machinery */}
            <Grid item xs={12} sm={6} md={3} sx={{ animation: "slideInUp 0.7s ease-out" }}>
              <Box sx={{ pb: 3, borderBottom: "2px solid rgba(76, 163, 255, 0.3)", transition: "all 0.3s ease", "&:hover": { borderBottomColor: "#4CA3FF" } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    mb: 3,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#fff",
                    background: "linear-gradient(135deg, #fff 0%, #4CA3FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {footerCategories.weavingMachinery.title}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {footerCategories.weavingMachinery.items.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        color: "#B0B9D4",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:before": {
                          content: '"→"',
                          color: "#4CA3FF",
                          opacity: 0,
                          transition: "all 0.3s ease",
                        },
                        "&:hover": {
                          color: "#4CA3FF",
                          pl: 1,
                          "&:before": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Weaving Related Machinery */}
            <Grid item xs={12} sm={6} md={3} sx={{ animation: "slideInUp 0.8s ease-out" }}>
              <Box sx={{ pb: 3, borderBottom: "2px solid rgba(76, 163, 255, 0.3)", transition: "all 0.3s ease", "&:hover": { borderBottomColor: "#4CA3FF" } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    mb: 3,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#fff",
                    background: "linear-gradient(135deg, #fff 0%, #4CA3FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {footerCategories.weavingRelated.title}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {footerCategories.weavingRelated.items.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        color: "#B0B9D4",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:before": {
                          content: '"→"',
                          color: "#4CA3FF",
                          opacity: 0,
                          transition: "all 0.3s ease",
                        },
                        "&:hover": {
                          color: "#4CA3FF",
                          pl: 1,
                          "&:before": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Used Weaving Looms & Social */}
            <Grid item xs={12} sm={6} md={3} sx={{ animation: "slideInUp 0.9s ease-out" }}>
              <Box sx={{ pb: 3, borderBottom: "2px solid rgba(76, 163, 255, 0.3)", transition: "all 0.3s ease", "&:hover": { borderBottomColor: "#4CA3FF" } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    mb: 3,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#fff",
                    background: "linear-gradient(135deg, #fff 0%, #4CA3FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {footerCategories.usedLooms.title}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
                  {footerCategories.usedLooms.items.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        color: "#B0B9D4",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:before": {
                          content: '"→"',
                          color: "#4CA3FF",
                          opacity: 0,
                          transition: "all 0.3s ease",
                        },
                        "&:hover": {
                          color: "#4CA3FF",
                          pl: 1,
                          "&:before": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>

                {/* Social Links */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.link}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          background: "linear-gradient(135deg, rgba(76, 163, 255, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)",
                          border: "2px solid #4CA3FF",
                          borderRadius: "50%",
                          color: "#4CA3FF",
                          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          "&:hover": {
                            backgroundColor: "#4CA3FF",
                            color: "#1B2559",
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 25px rgba(76, 163, 255, 0.3)",
                          },
                        }}
                      >
                        <IconComponent sx={{ fontSize: "1.1rem" }} />
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "rgba(76, 163, 255, 0.2)" }} />

      {/* Bottom Footer */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            py: 4,
            textAlign: "center",
            animation: "slideInUp 1s ease-out",
          }}
        >
          <Typography
            sx={{
              color: "#B0B9D4",
              fontSize: "0.9rem",
              fontWeight: 500,
              mb: 1,
            }}
          >
            &copy; {currentYear} <span style={{ color: "#4CA3FF", fontWeight: 700 }}>Spare Tex India</span>. All rights reserved.
          </Typography>
          <Typography
            sx={{
              color: "#666",
              fontSize: "0.8rem",
            }}
          >
            Trusted supplier of textile machinery and spare parts since 2017
          </Typography>
        </Box>
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
