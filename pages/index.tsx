import React from "react";

import Header from "../header/Header";
import Image from "next/image";
import img from "../images/body-image.jpg";

function App() {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex flex-row items-center h-[85%] justify-center">
        <Image src={img} alt="hello"></Image>
      </div>
    </div>
  );
}

export default App;
