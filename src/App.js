import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Membership from "./pages/Membership";
import Navbar from "./components/Navbar";
import "./App.css";
import {useMediaQuery, ThemeProvider, createTheme} from "@mui/material";
import {AppProvider} from "./contexts/AppContext";

function App() {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <div className="container">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:eventId" element={<EventDetails />} />
                <Route path="/membership" element={<Membership />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
