import React, { Fragment } from "react";
import CreateNoteForm from "../components/CreateNoteForm/CreateNoteForm";
import BaseLayout from "../components/BaseLayout";
function Add(props) {
  return (
    <div className="h-screen">
      <BaseLayout pageName="Notes taking app | Add new note">
        <CreateNoteForm />
      </BaseLayout>
    </div>
  );
}
export default Add;
