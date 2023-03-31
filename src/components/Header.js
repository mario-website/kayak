import React from "react";
import {Link} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    {text: "Strona początkowa", link: "/"},
    {text: "Wydarzenia", link: "/events"},
    {text: "Członkostwo", link: "/membership"},
  ];

  return (
    <header className="header">
      <div className="container">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="mobile-menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flexGrow: 1}}>
              Klub Kajakarski
            </Typography>
            <nav className="navbar desktop-menu">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={item.link}
                  color="inherit"
                  variant="text">
                  {item.text}
                </Button>
              ))}
            </nav>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.link}
                onClick={toggleDrawer(false)}>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
