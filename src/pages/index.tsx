import React from "react";
import Image from "next/image";
import BaseLayout from "../components/BaseLayout";

function App() {
  return (
    <BaseLayout pageName="Notes taking app | Create notes with ease">
      <div className="h-screen">
        <div className="flex flex-row items-center h-[85%] justify-center">
          <Image
            src="/body-image.jpg"
            alt="hello"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </BaseLayout>
  );
}

export default App;
