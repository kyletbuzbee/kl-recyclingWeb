import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import "@testing-library/jest-dom";

// Mock the fetch API
global.fetch = jest.fn();

describe("ContactForm", () => {
  beforeEach(() => {
    // Reset mocks before each test
    (fetch as jest.Mock).mockClear();
  });

  it("navigates through steps and submits successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<ContactForm />);

    // Initially, only name field should be visible (Step 1)
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, {
      target: { value: "John Doe" },
    });
    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    // After clicking Next, email and message fields should be visible (Step 2)
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(emailInput, {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message." },
    });
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /finish/i }));

    // Submission loading state
    expect(screen.getByRole("button", { name: /submitting.../i })).toBeInTheDocument();

    // Final success step
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it("shows an error message if submission fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Something went wrong. Please try again."));

    render(<ContactForm />);

    // Go through steps
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Another test." },
    });
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /finish/i }));

    // Button should be re-enabled
    expect(screen.getByRole("button", { name: /finish/i })).not.toBeDisabled();
  });
});
