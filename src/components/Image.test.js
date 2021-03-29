import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Image from "./Image";

describe("Image", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Image />
      </BrowserRouter>
    );
  });

  test("Given a valid url, it returns the correct image and alt text", () => {
    const dummyImageURL = "https://dummyimage.com/200x125.jpg";
    render(
      <BrowserRouter>
        <Image photo={dummyImageURL} alt='A dummy image' />
      </BrowserRouter>
    );

    // Check if image is in document, has correct styling and alt text
    const image = screen.getByRole("img");
    expect(image.src).toBe("https://dummyimage.com/200x125.jpg");
    expect(image).toHaveStyle({ height: "125", width: "200" });
    expect(image.alt).toBe("A dummy image");
  });

  test("Given an invalid url, it returns the default 'house' image", async () => {
    // An error is thrown in the component when an invalid image URL
    // is given, so I am temporarily silencing error output and
    // restoring it to its original functionality at the end of the test
    const originalError = console.error;
    console.error = jest.fn();

    const badImageURL = "asfsfsdf";

    render(
      <BrowserRouter>
        <Image photo={badImageURL} />
      </BrowserRouter>
    );

    // We need to wait for the fetch call that checks the image
    // url to finish and state to update
    await waitFor(() => {
      const image = screen.getByRole("img");
      expect(image.src).toContain("default-house.png");
    });

    // Restore console.error
    console.error = originalError;
  });
});
