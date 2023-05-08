import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Notice from "../Components/Notice";
import TrackBar from "../Components/TrackBar";
import Group from "../Components/Group";
import Wares from "../Components/Wares";
import NewsSheet from "../Components/NewsSheet";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Notice />
      <NavigationBar />
      <TrackBar />
      <Group />
      <Wares />
      <NewsSheet />
      <Footer />
    </div>
  );
};

export default HomePage;
