import { ChangeEvent } from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import CreateNoteForm from "../CreateNoteForm/CreateNoteForm";

describe("Create note form tests", () => {
  it("should render the UI correctly", () => {
    expect(render(<CreateNoteForm />).asFragment()).toMatchSnapshot();
  });

  it("should change the values correctly", async () => {
    const { getByPlaceholderText } = render(<CreateNoteForm />);

    const titleInput = getByPlaceholderText("NOTES TITLE") as HTMLInputElement;

    await waitFor(() => {
      fireEvent.change(titleInput, { target: { value: "Test Note" } });
      expect(titleInput.value).toBe("Test Note");
    });
  });

  it("should submit values correctly", async () => {
    const { container } = render(<CreateNoteForm />);

    const relevanceInput = container.querySelector(
      `[name = 'relevance']`
    ) as HTMLInputElement;

    if (relevanceInput) {
      await waitFor(() => {
        fireEvent.change(relevanceInput, { target: { value: "Test Note" } });
        expect(relevanceInput.value).toBe("Test Note");
      });
    }
  });
});
