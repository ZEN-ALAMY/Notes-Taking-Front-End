import React, { Fragment, useEffect, useState } from "react";

import Header from "../header/Header";

import NoteItem from "../components/NoteItem";

// import NoteList from "../components/NoteList";

function AllNotes() {
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes]: any = useState();
  useEffect(() => {
    const send = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/all");
      const responseData = await response.json();
      setNotes(responseData);
      console.log(responseData);
      setIsLoading(false);
    };
    send();
  }, []);
  return (
    <div className="h-screen">
      {console.log("hello")}
      <Header></Header>
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
  );
}

export default AllNotes;
