import React, { useState } from "react";
import { addNote } from "../../services/notes-taking.service";

function Input() {
  const [values, setValues] = useState({
    title: "",
    date: "",
    relevance: "",
  });
  const titleHandler = (event) => {
    setValues({ ...values, title: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log(values);
    const response = await addNote(values);
    // const responseData = await response.json();
    setValues({ ...values, title: "", date: "", relevance: "" });
  };

  return (
    <div className="xl:w-[650px] sm:w-[360px] h-[480px]  rounded-2xl mt-12 mx-auto">
      <form className="flex flex-col">
        <input
          className="w-[300px] xl:w-[500px] sm:w-[400px] h-[70px] mx-auto my-[20px] rounded-lg border-[3px] border-black border-solid mt-[40px]"
          type="text"
          required
          value={values.title}
          placeholder="NOTES TITLE"
          name="firstName"
          onChange={titleHandler}
        />

        <input
          className="w-[300px] xl:w-[500px] sm:w-[400px] h-[70px] mx-auto my-[20px] rounded-lg border-[3px] border-black border-solid"
          type="text"
          value={values.date}
          placeholder="DATE"
          name="date"
          onChange={(event) => {
            setValues({ ...values, date: event.target.value });
          }}
        />
        <input
          className="w-[300px] xl:w-[500px] sm:w-[400px] h-[70px]  mx-auto my-[20px] rounded-lg border-[3px] border-black border-solid"
          type="text"
          value={values.relevance}
          name="relevance"
          onChange={(event) => {
            setValues({ ...values, relevance: event.target.value });
          }}
        />
        <button
          className="w-[200px] mx-auto mb-[30px] mt-[10px] h-[60px] bg-green-500 sm:bg-red-500 xl:bg-blue-500 text-black rounded-xl font-extrabold text-lg"
          type="submit"
          onClick={submitHandler}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Input;
