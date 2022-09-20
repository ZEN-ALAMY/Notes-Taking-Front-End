import axios from "axios";
import { Note } from "../types/Note";

const getAllNotes = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/all");
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject([]);
    }
  } catch (err) {
    return Promise.reject([]);
  }
};

const addNote = async (note: Note): Promise<boolean> => {
  try {
    const response = await axios.post("http://localhost:5000/api/add", {
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });

    console.log("response", response.data);
    if (response.data.result === "Reached") {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export { getAllNotes, addNote };
