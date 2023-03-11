import { FC, useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "./Gallery";
import Home from "./Home";
import { NFTGalleryWrapper } from "../context";

const App: FC = () => {
  return (
    <NFTGalleryWrapper>
      <main>
        {false ? <Gallery /> : <Home />}
        <Footer />
      </main>
    </NFTGalleryWrapper>
  );
};

export default App;
