import { useState } from "react";
import { Carousel, Prime } from "../src/components";

export default {
  title: "Components/Content/Carousel",
  component: Carousel,
  subcomponents: { Prime },
  parameters: {
    docs: {
      description: {
        component: "Carousel component",
      },
    },
  },
};

export function Default() {
  const items = ["First", "Second", "Third"];

  const colors = ["primary", "secondary", "success"];

  return (
    <Carousel defaultIndex={0} controls>
      <Carousel.Inner>
        {items.map((title, idx) => (
          <Carousel.Item key={title}>
            <Prime
              d="block"
              w={100}
              bg={colors[idx]}
              style={{ height: "450px" }}
            />
            <Carousel.Caption>
              <h5>{title} slide label</h5>
              <p>
                Some representative placeholder content for the{" "}
                {title.toLowerCase()} slide.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel.Inner>
    </Carousel>
  );
}
