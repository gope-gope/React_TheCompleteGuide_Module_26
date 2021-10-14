import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Async component", () => {
  test("Renders posts, if requests successds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
