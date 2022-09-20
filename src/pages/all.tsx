import { FunctionComponent, useEffect, useState } from "react";
import Header from "../header/Header";
import NoteItem from "../components/NoteItem/NoteItem";
import BaseLayout from "../components/BaseLayout";
import axios from "axios";
import { getAllNotes } from "../services/notes-taking.service";

// import NoteList from "../components/NoteList";

const AllNotes: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes]: any = useState();
  useEffect(() => {
    const send = async () => {
      setIsLoading(true);
      const response = await getAllNotes();
      setNotes(response);
      console.log(response);
      setIsLoading(false);
    };
    send();
  }, []);
  return (
    <BaseLayout pageName="Notes taking app | All notes">
      <div className="h-screen">
        {!isLoading &&
          notes &&
          notes.map((n: any) => {
            return (
              <NoteItem
                title={n.title}
                date={n.date}
                relevance={n.relevance}
              ></NoteItem>
            );
          })}
        {/* <h1>{notes[0].title}</h1> */}
      </div>
    </BaseLayout>
  );
};

export default AllNotes;
