import { render, waitFor } from "@testing-library/react";
import { MOCK_NOTES } from "../../mocks/Notes";
import All from "../../pages/all";

jest.mock("../../services/notes-taking.service", () => ({
  getAllNotes: () => MOCK_NOTES,
}));

describe("All notes tests", () => {
  it("should render the UI correctly", async () => {
    await waitFor(() => {
      expect(render(<All />).asFragment()).toMatchSnapshot();
    });
  });
});
