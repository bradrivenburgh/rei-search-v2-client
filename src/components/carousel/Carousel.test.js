import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import Carousel from "./Carousel";

describe("Carousel", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>
    );
  });

  test("first image in array is active by default", () => {
    const photos = [
      "https://dummyimage.com/200x125.jpg",
      "https://dummyimage.com/200x126.jpg",
    ];

    render(
      <BrowserRouter>
        <Carousel photos={photos} />
      </BrowserRouter>
    );

    const slide = screen.getByAltText("slide 1").closest("div");
    expect(slide).toHaveClass("active-slide");
  });

  test("displays next image when right button clicked, eventually circling back to first image", () => {
    const photos = [
      "https://dummyimage.com/200x125.jpg",
      "https://dummyimage.com/200x126.jpg",
    ];

    render(
      <BrowserRouter>
        <Carousel photos={photos} />
      </BrowserRouter>
    );

    const rightButton = screen.getByRole("button", { name: ">" });

    // Second image in array is not active by default
    const inactiveSecondSlide = screen.getByAltText("slide 2").closest("div");
    expect(inactiveSecondSlide).toHaveClass("inactive-slide");

    // Click right button to get to next image in array
    userEvent.click(rightButton);

    const activeSecondSlide = screen.getByAltText("slide 2").closest("div");
    expect(activeSecondSlide).toHaveClass("active-slide");

    // Click right button to get back to the first image in array
    userEvent.click(rightButton);

    const activeFirstSlide = screen.getByAltText("slide 1").closest("div");
    expect(activeFirstSlide).toHaveClass("active-slide");
  });

  test("displays previous image when left button clicked, displaying last img when pressed on first image", () => {
    const photos = [
      "https://dummyimage.com/200x125.jpg",
      "https://dummyimage.com/200x126.jpg",
    ];

    render(
      <BrowserRouter>
        <Carousel photos={photos} />
      </BrowserRouter>
    );

    const leftButton = screen.getByRole("button", { name: "<" });

    // Second image in array is not active by default
    const inactiveSecondSlide = screen.getByAltText("slide 2").closest("div");
    expect(inactiveSecondSlide).toHaveClass("inactive-slide");

    // Click left button to get to previous image in array
    userEvent.click(leftButton);

    const activeSecondSlide = screen.getByAltText("slide 2").closest("div");
    expect(activeSecondSlide).toHaveClass("active-slide");

    // Click left button to get back to the first image in array
    userEvent.click(leftButton);

    const activeFirstSlide = screen.getByAltText("slide 1").closest("div");
    expect(activeFirstSlide).toHaveClass("active-slide");
  });

  test("displays default house image when given a bad image url", async () => {
    // An error is thrown in the component when an invalid image URL
    // is given, so I am temporarily silencing error output and
    // restoring it to its original functionality at the end of the test
    const originalError = console.error;
    console.error = jest.fn();

    const photos = ["aaaaaaaaaa"];
    render(
      <BrowserRouter>
        <Carousel photos={photos} />
      </BrowserRouter>
    );

    await waitFor(() => {
      const firstImg = screen.getByRole("img");
      expect(firstImg.src).toContain("default-house");
    });

    // Restoring original error functionality
    console.error = originalError;
  });
});
