import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header fonts={"nexon"} />
      {/* // header */}

      <Main>
        <Slider fonts={"nexon"} />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText attr={["section", "nexon", "gray", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner attr={["gmark"]} />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      {/* // main */}

      <Footer attr={["section", "nexon", "gray", "container"]} />
      {/* // footer */}
    </>
  );
}

export default App;