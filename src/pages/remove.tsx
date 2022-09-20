import React, { Fragment, useState } from "react";
import BaseLayout from "../components/BaseLayout";

import Header from "../header/Header";

function Remove() {
  const [title, setTitle] = useState("");
  return (
    <BaseLayout pageName="Notes taking app | Remove note">
      <div className="h-screen">
        <form className="mt-[100px]">
          <div className="flex flex-col">
            <input
              type="text"
              required
              className="xl:w-[500px] sm:w-[340px] h-[70px] mx-auto my-[20px] rounded-lg border-[3px] border-black border-solid"
              value={title}
              placeholder="TITLE"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <button
              type="submit"
              className="m-auto mt-[20px] rounded-lg w-[200px] h-[60px] bg-green-500 sm:bg-red-500 xl:bg-blue-500  text-black font-extrabold text-lg"
              onClick={async (event) => {
                event.preventDefault();
                const response = await fetch(
                  "http://localhost:5000/api/remove",
                  {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                      title: title,
                    }),
                  }
                );
                setTitle("");
              }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
}

export default Remove;
