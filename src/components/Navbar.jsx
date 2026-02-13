import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Popper,
  Paper,
  Grid,
  Fade,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const open = Boolean(anchorEl);

  const megaMenuContent = {
    weavingMachinery: {
      title: "Weaving Machinery",
      columns: [
        [
          { heading: "Jacquard Machine", items: true },
          "Sun200 Jacquard Machine",
          "Sun300 400 500 Jacquard Machine",
          "Sun600 Jacquard Machine",
        ],
        [
          { heading: "High Speed Rapier Loom", items: true },
          "QJHB10 Rapier Loom",
          "QJHB10 Rapier Loom",
          "DF3I Rapier Loom",
          "DF5I Rapier Loom",
        ],
        [
          { heading: "Low Speed Rapier Loom", items: true },
          "Ultra-wide Width Weaving",
          "Fiberglass Weaving",
          "Jute & Sisal Weaving",
          "Carbon Fiber Weaving",
          "GA736 Rapier Loom",
          "GA788 Rapier Loom",
        ],
        [
          { heading: "Jacquard Loom", items: true },
          "DF3JI Rapier Jacquard Loom",
          "DF7JI Rapier Jacquard Loom",
          "QJHB10J Rapier Jacquard Loom",
        ],
        [
          { heading: "Towel Loom", items: true },
          "DF7IM Dobby Towel Loom",
          "GA738-1 Towel Loom",
          "GA738-II Towel Loom",
        ],
        [
          { heading: "Industrial Fabric Loom", items: true },
          "Wire Mesh Weaving",
          "Industrial Screen Weaving",
          "Paper Forming Mesh Weaving",
          "Fire Retardant Conveyor Core Weaving",
          "LG798-1 Jute Loom",
          "3D Weaving Machine for Composite Materials",
        ],
        [
          { heading: "Air Jet Loom", items: true },
          "Medical Gauze Weaving",
          "Valve Weaving",
          "Tyre Cord Weaving",
          "Fiberglass Weaving",
          "HHB10 air jet loom",
        ],
        [
          { heading: "Water Jet Loom", items: true },
          "AC Filter Weaving",
          "Polymesh Bag Weaving Loom",
          "Sunshading Net Weaving Loom",
          "Geotextile Fabric Weaving",
          "Window Screen Weaving",
        ],
      ],
    },

    textileParts: {
      title: "Textile Machine Parts",
      columns: [
        [
          { heading: "Rapier Loom Spare Parts", items: true },
          "Rapier Gripper",
          "Rapier Tape",
          "Gripper Opener",
          "Drive Wheel",
          "Guide Hook",
        ],
        [
          { heading: "Jacquard Spare Parts", items: true },
          "Jacquard Harness Assembly",
          "Harness Cord",
          "Wire Heald",
          "Jacquard Spring",
          "Comber Board",
          "Staubli Jacquard Spares",
          "Bonas Jacquard Spares",
          "Gross Jacquard Spares",
        ],
        [
          { heading: "Common Replacement Parts", items: true },
          "Heald Frame & Parts",
          "Weaving Reed",
          "Drop Wire",
          "Clutch & Brake",
          "Weft Feeder & Parts",
          "Tuck In Device",
          "Guide Slide",
          "Weft Sensor",
        ],
        [
          { heading: "Additional Components", items: true },
          "Warp Beam",
          "Heald Wire",
          "Cutter & Blade",
          "Leno Selvage Device",
          "Temple Cylinder",
          "Warp Stop Motion",
          "Circuit Panel",
          "Electronic Weft Selector",
        ],
        [
          { heading: "Electronic Parts", items: true },
          "Encoder and Motor",
          "Electromagnet & Coil",
          "Membrane Switch and Touch Screen",
          "Switch and Sensor",
          "Weft Feeler",
        ],
        [
          { heading: "Parts by Brand", items: true },
          "Staubli Spare Parts",
          "Chinese Dobby Spare Parts",
          "Picanol Spare Parts",
          "Vamatex Spare Parts",
          "Somet Spare Parts",
          "DNR Spare Parts",
          "Sulzer Spare Parts",
        ],
      ],
    },

    
    bearing: {
      title: "WEAVING ACCESORIES",
      columns: [
        [
          "Tools",
          "Belt",
          "Oil Seals",
          "Bolt Nut",
        ],
        [
          "Electronic Board Items",
  
        ],
      ],
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 6 : 0}
        sx={{
          background: scrolled
            ? "linear-gradient(135deg, #1B2559 0%, #2D3E7A 100%)"
            : "linear-gradient(135deg, #1B2559 0%, #2D3E7A 100%)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(10px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: { xs: 1, md: 1.5 },
            }}
          >
            
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Spare Tex"
                sx={{
                  height: { xs: 45, md: 60 },
                  backgroundColor: "#fff",
                  px: 1.5,
                  borderRadius: 1.5,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 2,
                  fontWeight: 800,
                  color: "#fff",
                  display: { xs: "none", sm: "block" },
                  fontSize: "1.1rem",
                  letterSpacing: "0.5px",
                }}
              >
                SPARE TEX
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>

              <Button component={RouterLink} to="/" sx={navButtonStyle}>
                Home
              </Button>

              <Button sx={navButtonStyle}>
                Company Profile
              </Button>

              <Button
                sx={navButtonStyle}
                endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />}
                onMouseEnter={(e) => handleOpen(e, "weavingMachinery")}
              >
                Weaving Machinery
              </Button>

              <Button
                sx={navButtonStyle}
                endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />}
                onMouseEnter={(e) => handleOpen(e, "textileParts")}
              >
                Textile Machine Parts
              </Button>

              <Button
                sx={navButtonStyle}
                endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />}
                onMouseEnter={(e) => handleOpen(e, "bearing")}
              >
                Weaving Accessories
              </Button>

              {/* CTA Button */}
              <Button
                sx={{
                  backgroundColor: "#4CA3FF",
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  ml: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2563EB",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 16px rgba(76, 163, 255, 0.4)",
                  },
                }}
              >
                Contact Us
              </Button>

            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "rotate(90deg)",
                },
              }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </Container>

        {/* FULL WIDTH MEGA MENU */}
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement="bottom"
          transition
          onMouseLeave={handleClose}
          sx={{ zIndex: 1300, width: "100%" }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={300}>
              <Paper
                elevation={12}
                sx={{
                  width: "100%",
                  mt: 0.5,
                  py: 6,
                  px: { xs: 3, md: 10 },
                  background: "linear-gradient(135deg, #fff 0%, #F8FAFC 100%)",
                  borderTop: "4px solid #4CA3FF",
                  borderRadius: 0,
                }}
              >
                <Container maxWidth="xl">
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      color: "#1B2559",
                      mb: 4,
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                    }}
                  >
                    {megaMenuContent[menuType]?.title}
                  </Typography>

                  <Grid container spacing={{ xs: 3, md: 5 }}>
                    {megaMenuContent[menuType]?.columns.map(
                      (column, colIndex) => (
                        <Grid item xs={12} sm={6} md={4} key={colIndex}>
                          {column.map((item, index) => (
                            typeof item === "object" && item.heading ? (
                              <Typography
                                key={index}
                                sx={{
                                  fontWeight: 800,
                                  color: "#1B2559",
                                  mb: 2,
                                  mt: index > 0 ? 3 : 0,
                                  fontSize: "0.95rem",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                {item.heading}
                              </Typography>
                            ) : (
                              <Typography
                                key={index}
                                sx={{
                                  cursor: "pointer",
                                  mb: 2,
                                  fontWeight: 600,
                                  color: "#333",
                                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                  position: "relative",
                                  paddingLeft: "0px",
                                  "&:hover": {
                                    color: "#4CA3FF",
                                    transform: "translateX(8px)",
                                  },
                                  "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: 0,
                                    height: "2px",
                                    backgroundColor: "#4CA3FF",
                                    transition: "width 0.3s ease",
                                  },
                                  "&:hover::before": {
                                    width: "8px",
                                  },
                                }}
                              >
                                {item}
                              </Typography>
                            )
                          ))}
                        </Grid>
                      )
                    )}
                  </Grid>
                </Container>
              </Paper>
            </Fade>
          )}
        </Popper>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: "linear-gradient(180deg, #1B2559 0%, #2D3E7A 100%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: "#fff",
            }}
          >
            MENU
          </Typography>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 2 }}>
          {[
            { text: "Home", link: "/" },
            { text: "Company Profile", link: "#" },
            { text: "Weaving Machinery", link: "#" },
            { text: "Textile Machine Parts", link: "#" },
            { text: "Weaving Accesories", link: "#" },
            { text: "Contact Us", link: "#" },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                component={RouterLink}
                to={item.link}
                onClick={() => setMobileOpen(false)}
                sx={{
                  py: 2,
                  px: 3,
                  color: "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(76, 163, 255, 0.1)",
                    paddingLeft: "1.5rem",
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                />
              </ListItem>
              {index < 5 && (
                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              )}
            </React.Fragment>
          ))}
        </List>

        {/* Mobile Contact Info */}
        <Box
          sx={{
            mt: "auto",
            p: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2,
              color: "#4CA3FF",
            }}
          >
            <PhoneIcon fontSize="small" />
            <Typography variant="body2" sx={{ color: "#fff" }}>
              +1 (555) 123-4567
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "#4CA3FF",
            }}
          >
            <EmailIcon fontSize="small" />
            <Typography variant="body2" sx={{ color: "#fff" }}>
              info@sparetex.com
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
}

/* Enhanced Navigation Button Style */
const navButtonStyle = {
  color: "#fff",
  position: "relative",
  fontWeight: 700,
  fontSize: "0.95rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  textTransform: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "3px",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#4CA3FF",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "3px 3px 0 0",
  },
  "&:hover": {
    backgroundColor: "rgba(76, 163, 255, 0.1)",
    color: "#fff",
  },
  "&:hover::after": {
    width: "100%",
  },
};
