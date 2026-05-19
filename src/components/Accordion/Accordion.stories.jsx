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
  return (
    <Accordion>
      <Accordion.Item itemKey={1}>
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>This is the first item's accordion body</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
