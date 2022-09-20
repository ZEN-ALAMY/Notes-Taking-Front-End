import moxios from "moxios";
import { addNote, getAllNotes } from "./notes-taking.service";

describe("Notes taking service tests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // it("should make api call correctly", async () => {
  //   const expectedData = [
  //     { date: "19-09-2022", relevance: "Not relevant", title: "My Notes" },
  //   ];

  //   moxios.stubRequest(/all/i, {
  //     status: 200,
  //     data: expectedData,
  //   });

  //   const result = await getAllNotes();

  //   expect(result).toEqual(expectedData);
  // });

  // it("should make post api call correctly", async () => {
  //   const postData = {
  //     date: "19-09-2022",
  //     relevance: "Not relevant",
  //     title: "My Notes",
  //   };

  //   moxios.stubRequest(/add/i, {
  //     status: 200,
  //     data: { result: "Reached" },
  //   });

  //   const result = await addNote(postData);
  //   expect(result).toBe(true);
  // });
});
