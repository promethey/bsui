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
        component: "",
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
    <Accordion>
      {examples.map(({ title, body }, index) => (
        <Accordion.Item itemKey={index + 1}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
