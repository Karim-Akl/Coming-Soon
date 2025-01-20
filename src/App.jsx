import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserDetails from "./pages/user-details";
import NotFound from "./pages/not-found";
import ErrorPage from "./pages/error-page";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* User details page */}
        <Route path="/user/:id" element={<UserDetails />} />

        {/* Route for the error page */}
        <Route path="error-page" element={<ErrorPage />} />

        {/* Catch-all route to handle 404s */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
