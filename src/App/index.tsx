import { FC } from "react";
import Footer from "../components/Footer";
import Gallery from "./Gallery";
import Home from "./Home";
import { NFTGalleryWrapper, useNFTGalleryContext } from "../context";
import "./App.css";

const App: FC = () => {
  const { showNFTPage } = useNFTGalleryContext();
  
  return (
    <main>
      {showNFTPage ? <Gallery /> : <Home />}
      <Footer />
    </main>
  );
};

export default App;
