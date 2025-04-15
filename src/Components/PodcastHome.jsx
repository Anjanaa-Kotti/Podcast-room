import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/PodcastHome.css";
import Footer from "../Components/Footer";
import ServicesCard from "./ServicesCard";

const PodcastHome = () => {
  return (
    <div>
      <Navbar />
      <div className="text-container">
        <h1>Book Your Podcast Studio</h1>
      </div>
      <div className="text-body">
        <h2>
          Reserve your perfect recording space and start creating amazing
          content with professional equipment and support.
        </h2>
      </div>
      <ServicesCard />
      <Footer />
    </div>
  );
};
export default PodcastHome;
