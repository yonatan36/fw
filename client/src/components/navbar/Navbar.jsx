import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ROUTES from "../../routes/ROUTES";
import NavLinkComponent from "./NavLinkComponent";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Profile from "../../Pages/profile/Profile";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import Login from "../../Pages/login/Login";
import RegisterPage from "../../Pages/registerPage/Register";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchComp from "../SearchComp";
import axios from "axios";
import { useTheme } from "@mui/material";

const ResponsiveAppBar = ({ darkMode, onThemeChange }) => {
  const pages = [
    {
      label: "About",
      icon: <InfoIcon />,
      url: ROUTES.ABOUT,
    },
  ];
  //not logged in users
  const settings = [
    {
      label: "Profile",
      icon: <AccountBoxIcon />,
      url: () => setOpenProfile(true),
    },

    {
      label: "LOGOUT",
      icon: <LogoutIcon />,
      url: ROUTES.LOGOUT,
    },
  ];

  const notAuthPages = [
    {
      label: "Sign In",
      icon: <LoginIcon />,
      url: () => setOpenLogin(true),
    },
  ];
  const authedPages = [
    {
      label: "Home",
      icon: <HomeIcon />,
      url: ROUTES.HOME,
    },
    {
      label: "Favorites",
      icon: <FavoriteIcon />,
      url: ROUTES.FAV,
    },
  ];
  const BizAdminPages = [
    {
      label: "My Movies",
      icon: <CreateIcon />,
      url: ROUTES.MYCARDS,
    },
  ];

  const { isLoggedIn } = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice
  );
  const { payload } = useSelector((bigPieBigState) => bigPieBigState.authSlice);

  const [backgroundColor, setBackgroundColor] = useState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [avatar, setAvatar] = useState([]);
  const [name, setName] = useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setBackgroundColor("black");
    } else {
      setBackgroundColor("transparent");
    }
  };

  const onUpdate = (url, alt, firstName) => {
    setAvatar({
      url,
      alt,
    });
    setName({
      name: firstName,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const theme = useTheme();
  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("/users/userInfo/")
        .then((userInfo) => {
          setAvatar({
            url: userInfo.data.image.url,
            alt: userInfo.data.image.alt,
          });
          setName({
            name: userInfo.data.name.firstName,
          });
        })
        .catch((err) => {});
    }
  }, [isLoggedIn]);

  return (
    <>
      <AppBar
        style={{
          backgroundColor: darkMode ? backgroundColor : "#fafafa",
          color: darkMode ? "" : "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              fontWeight="700"
              fontSize="1.7rem"
              sx={{ mr: 2.4, ml: 0.6, display: { xs: "none", md: "flex" } }}
            >
              Yoon
              <span style={{ color: theme.palette.error.main }}>Flix</span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
                {/* hamburger with menu */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {" "}
                {isLoggedIn
                  ? authedPages.map((page) => (
                      <MenuItem
                        key={"miniLinks" + page.url}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          textAlign="center"
                          sx={{ fontSize: "1rem" }}
                        >
                          <NavLink
                            to={page.url}
                            style={{
                              color: darkMode ? "#e8f5e9" : "#212121",
                              textDecoration: "none",
                              fontWeight: "bold",
                              display: "flex",
                              alignItems: "center", // Center items vertically within the container
                            }}
                          >
                            {page.icon && (
                              <span
                                style={{
                                  marginRight: "0.5rem",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {page.icon}
                              </span>
                            )}
                            {page.label}
                          </NavLink>
                        </Typography>
                      </MenuItem>
                    ))
                  : ""}
                {isLoggedIn && (payload?.isBusiness || payload?.isAdmin)
                  ? BizAdminPages.map((page) => (
                      <MenuItem
                        key={"miniLinks" + page.url}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          textAlign="center"
                          sx={{ fontSize: "1rem" }}
                        >
                          <NavLink
                            to={page.url}
                            style={{
                              color: darkMode ? "#e8f5e9" : "#212121",
                              textDecoration: "none",
                              fontWeight: "bold",
                              display: "flex",
                              alignItems: "center", // Center items vertically within the container
                            }}
                          >
                            {page.icon && (
                              <span
                                style={{
                                  marginRight: "0.5rem",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {page.icon}
                              </span>
                            )}
                            {page.label}
                          </NavLink>
                        </Typography>
                      </MenuItem>
                    ))
                  : ""}
                {pages.map((page) => (
                  <MenuItem
                    key={"miniLinks" + page.url}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center" sx={{ fontSize: "1rem" }}>
                      <NavLink
                        to={page.url}
                        style={{
                          color: darkMode ? "#e8f5e9" : "#212121",
                          textDecoration: "none",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center", // Center items vertically within the container
                        }}
                      >
                        {page.icon && (
                          <span
                            style={{
                              marginRight: "0.5rem",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {page.icon}
                          </span>
                        )}
                        {page.label}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
                {!isLoggedIn &&
                  notAuthPages.map((page) => (
                    <MenuItem
                      key={"miniLinks" + page.url}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center" sx={{ fontSize: "1rem" }}>
                        <NavLink
                          onClick={page.url}
                          style={{
                            color: darkMode ? "#e8f5e9" : "#212121",
                            textDecoration: "none",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {page.icon && (
                            <span
                              style={{
                                marginRight: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {page.icon}
                            </span>
                          )}
                          {page.label}
                        </NavLink>
                      </Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>

            <Typography
              fontWeight="700"
              fontSize="1.7rem"
              sx={{
                mr: 3,
                ml: 1,
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                "@media (max-width: 368px)": {
                  display: "none", // Hide on screens with a width of 300px or smaller
                },
              }}
            >
              Yoon
              <span style={{ color: theme.palette.error.main }}>Flix</span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {isLoggedIn
                ? authedPages.map((page) => (
                    <NavLinkComponent key={page.url} {...page} />
                  ))
                : ""}{" "}
              {(isLoggedIn && payload && payload.isBusiness) || payload?.isAdmin
                ? BizAdminPages.map((page) => (
                    <NavLinkComponent key={page.url} {...page} />
                  ))
                : ""}
              {pages.map((page) => (
                <NavLinkComponent key={page.url} {...page} />
              ))}
            </Box>
            <SearchComp />
            <IconButton
              color="inherit"
              onClick={onThemeChange}
              sx={{ ml: 1, mr: 1 }}
            >
              {darkMode ? <BedtimeIcon /> : <WbSunnyIcon />}
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {isLoggedIn
                ? ""
                : notAuthPages.map((page) => (
                    <NavLinkComponent key={page.url} {...page} />
                  ))}
            </Box>

            {isLoggedIn ? (
              <Box sx={{ flexGrow: 0, ml: 1, mr: 1.5 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={avatar.alt}
                      src={avatar.url}
                      sx={{ borderRadius: 0 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Typography
                    variant="button"
                    sx={{
                      display: "block",
                      paddingX: "0.3rem",
                      textAlign: "center",
                      textTransform: "none",
                      color: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    Hi {name.name}!
                  </Typography>
                  {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        sx={{
                          display: "flex",
                          alignItems: "center", // Center items vertically within the container
                          fontSize: "1rem",
                        }}
                      >
                        {setting.icon && (
                          <span
                            style={{
                              marginRight: "0.5rem",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {setting.icon}
                          </span>
                        )}
                        <NavLink
                          key={setting.url}
                          style={{
                            color: darkMode ? "#e8f5e9" : "#212121",
                            textDecoration: "none",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center", // Center items vertically within the container
                          }}
                          {...(typeof setting.url === "string"
                            ? { to: setting.url }
                            : { onClick: setting.url })}
                        >
                          {setting.label}
                        </NavLink>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              ""
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <RegisterPage
        openRegister={openRegister}
        setOpenRegister={setOpenRegister}
      />
      <Login
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        avatar={avatar}
      />
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        avatar={avatar}
        onUpdate={onUpdate}
      />
    </>
  );
};
export default ResponsiveAppBar;
