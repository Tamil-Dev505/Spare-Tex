import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
    <Box sx={{ backgroundColor: "#1B2559", color: "#fff" }}>
      {/* Main Footer Content */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* Textile Machinery Parts */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  mb: 2.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "#fff",
                }}
              >
                {footerCategories.textileParts.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {footerCategories.textileParts.items.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "#B0B9D4",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '"●"',
                        mr: 1,
                        color: "#4CA3FF",
                      },
                      "&:hover": {
                        color: "#4CA3FF",
                        pl: 0.5,
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Weaving Machinery */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  mb: 2.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "#fff",
                }}
              >
                {footerCategories.weavingMachinery.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {footerCategories.weavingMachinery.items.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "#B0B9D4",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '"●"',
                        mr: 1,
                        color: "#4CA3FF",
                      },
                      "&:hover": {
                        color: "#4CA3FF",
                        pl: 0.5,
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Weaving Related Machinery */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  mb: 2.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "#fff",
                }}
              >
                {footerCategories.weavingRelated.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {footerCategories.weavingRelated.items.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "#B0B9D4",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '"●"',
                        mr: 1,
                        color: "#4CA3FF",
                      },
                      "&:hover": {
                        color: "#4CA3FF",
                        pl: 0.5,
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Used Weaving Looms */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  mb: 2.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "#fff",
                }}
              >
                {footerCategories.usedLooms.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 4 }}>
                {footerCategories.usedLooms.items.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "#B0B9D4",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '"●"',
                        mr: 1,
                        color: "#4CA3FF",
                      },
                      "&:hover": {
                        color: "#4CA3FF",
                        pl: 0.5,
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>

              {/* Social Links */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
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
                        width: 36,
                        height: 36,
                        border: "2px solid #4CA3FF",
                        borderRadius: "50%",
                        color: "#4CA3FF",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#4CA3FF",
                          color: "#1B2559",
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: "1rem" }} />
                    </Link>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Contact Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {/* Contact Us */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                minWidth: "fit-content",
              }}
            >
              CONTACT US
            </Typography>
          </Box>

          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <EmailIcon sx={{ color: "#4CA3FF", fontSize: "1.5rem" }} />
            <Box>
              <Typography sx={{ fontSize: "0.75rem", color: "#B0B9D4", mb: 0.5 }}>
                Email us:
              </Typography>
              <Link
                href="mailto:guna@sparetex.in"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#4CA3FF",
                  },
                }}
              >
                guna@sparetex.in
              </Link>
            </Box>
          </Box>

          {/* Phone */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PhoneIcon sx={{ color: "#4CA3FF", fontSize: "1.5rem" }} />
            <Box>
              <Typography sx={{ fontSize: "0.75rem", color: "#B0B9D4", mb: 0.5 }}>
                Call us on:
              </Typography>
              <Link
                href="tel:+919500552100"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#4CA3FF",
                  },
                }}
              >
                +91 95005 52100
              </Link>
            </Box>
          </Box>

          {/* Address */}
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, gridColumn: { xs: "1", md: "3" } }}>
            <LocationOnIcon sx={{ color: "#4CA3FF", fontSize: "1.5rem", mt: 0.5, flexShrink: 0 }} />
            <Box>
              <Typography sx={{ fontSize: "0.75rem", color: "#B0B9D4", mb: 0.5 }}>
                Address:
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                5/204 Namakkal Main Road Kumaramangalam Tiruchengode Namakkal - 637 205 Tamil Nadu - India
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Bottom Footer */}
      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 3,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#B0B9D4",
              fontSize: "0.85rem",
            }}
          >
            &copy; {currentYear} Spare Tex India. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
