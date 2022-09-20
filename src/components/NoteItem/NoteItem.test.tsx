import { render } from "@testing-library/react";
import { MOCK_NOTE } from "../../mocks/Notes";
import { Note } from "../../types/Note";
import NoteItem from "./NoteItem";

describe("NoteItem component tests", () => {
  it("should render the UI correctly", () => {
    expect(render(<NoteItem {...MOCK_NOTE} />).asFragment()).toMatchSnapshot();
  });
});
