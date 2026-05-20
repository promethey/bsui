// @ts-nocheck
import { useState } from "react";
import { Accordion, Prime } from "components";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: {
    "Accordion.Item": Accordion.Item,
    "Accordion.Header": Accordion.Header,
    "Accordion.Button": Accordion.Button,
    "Accordion.Collapse": Accordion.Collapse,
    "Accordion.Body": Accordion.Body,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "A vertically stacked collection of expandable sections for toggling and organizing related content.",
      },
    },
  },
};

export function Default() {
  const examples = [
    {
      title: "Accordion Item #1",
      body: "This is the first item's accordion body",
    },
    {
      title: "Accordion Item #2",
      body: "This is the second item's accordion body",
    },
    {
      title: "Accordion Item #3",
      body: "This is the third item's accordion body",
    },
  ];

  return (
    <Accordion defaultActiveKey={1}>
      {examples.map(({ title, body }, index) => (
        <Accordion.Item itemKey={index + 1}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export function Flush() {
  const examples = [
    {
      title: "Accordion Item #1",
      body: "This is the first item's accordion body",
    },
    {
      title: "Accordion Item #2",
      body: "This is the second item's accordion body",
    },
    {
      title: "Accordion Item #3",
      body: "This is the third item's accordion body",
    },
  ];

  return (
    <Accordion defaultActiveKey="1" flush>
      {examples.map(({ title, body }, index) => (
        <Accordion.Item itemKey={`${index + 1}`}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export function AlwaysOpen() {
  const examples = [
    {
      title: "Accordion Item #1",
      body: "This is the first item's accordion body",
    },
    {
      title: "Accordion Item #2",
      body: "This is the second item's accordion body",
    },
    {
      title: "Accordion Item #3",
      body: "This is the third item's accordion body",
    },
  ];

  return (
    <Accordion defaultActiveKey={["1", "2", "3"]} alwaysOpen>
      {examples.map(({ title, body }, index) => (
        <Accordion.Item itemKey={`${index + 1}`}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
AlwaysOpen.storyName = "Always open";
