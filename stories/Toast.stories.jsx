import { useState, useEffect } from "react";
import {
  Toast,
  Button,
  Prime,
  Select,
  CloseButton,
  Spinner,
  Control,
  Label,
} from "../src/components";
import { v4 as uuid } from "uuid";

export default {
  title: "Components/Feedback/Toast",
  component: Toast,
  subcomponents: {
    "Toast.Header": Toast.Header,
    "Toast.Body": Toast.Body,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Toast component",
      },
    },
  },
};

export function Default() {
  return (
    <Toast open>
      <Toast.Header closeButton>
        <Prime
          as="img"
          src="https://avatars.githubusercontent.com/u/73757404?v=4"
          alt="avatar"
          rounded
          me={2}
          style={{ maxWidth: "24px" }}
        />
        <Prime as="strong" me="auto">
          promethey
        </Prime>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}

export function Controllable() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  const handleClose = (event) => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Show Toast</Button>
      <Toast open={show} onClose={handleClose} mt={3}>
        <Toast.Header closeButton>
          <Prime
            as="img"
            src="https://avatars.githubusercontent.com/u/73757404?v=4"
            alt="avatar"
            rounded
            me={2}
            style={{ maxWidth: "24px" }}
          />
          <Prime as="strong" me="auto">
            promethey
          </Prime>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </>
  );
}

export function Autohide() {
  const defaultLabel = "Show Toast";

  const [show, setShow] = useState(false);
  const [label, setLabel] = useState(defaultLabel);

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Show Toast</Button>
      <Toast
        open={show}
        onClose={handleClose}
        animation={false}
        autohide
        delay={3000}
        mt={3}>
        <Toast.Header closeButton>
          <Prime
            as="img"
            src="https://avatars.githubusercontent.com/u/73757404?v=4"
            alt="avatar"
            rounded
            me={2}
            style={{ maxWidth: "24px" }}
          />
          <Prime as="strong" me="auto">
            promethey
          </Prime>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </>
  );
}

export function Stacking() {
  const messages = [
    {
      time: "2 seconds ago",
      message: "Heads up, toasts will stack automatically",
    },
    {
      time: "just now",
      message: "See? Just like this.",
    },
  ];

  return (
    <Toast.Container>
      {messages.map(({ time, message }) => (
        <Toast open>
          <Toast.Header closeButton>
            <Prime
              as="img"
              src="https://avatars.githubusercontent.com/u/73757404?v=4"
              alt="avatar"
              rounded
              me={2}
              style={{ maxWidth: "24px" }}
            />
            <Prime as="strong" me="auto">
              promethey
            </Prime>
            <small>{time}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ))}
    </Toast.Container>
  );
}

export function Custom() {
  return (
    <Toast open flex={{ alignItems: "center" }}>
      <Prime d="flex">
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        <CloseButton me={2} m="auto" />
      </Prime>
    </Toast>
  );
}

export function Color() {
  return (
    <Toast
      open
      bg="primary"
      text="white"
      border={0}
      flex={{ alignItems: "center" }}>
      <Prime d="flex">
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        <CloseButton white me={2} m="auto" />
      </Prime>
    </Toast>
  );
}

export function Placement() {
  const selectOptions = [
    { title: "Top left", value: { top: 0, start: 0 } },
    {
      title: "Top center",
      value: { top: 0, start: 50, translate: "middle-x" },
    },
    {
      title: "Top right",
      value: { top: 0, end: 0 },
    },
    {
      title: "Middle left",
      value: { top: 50, start: 0, translate: "middle-y" },
    },
    {
      title: "Middle center",
      value: { top: 50, start: 50, translate: "middle" },
    },
    {
      title: "Middle right",
      value: { top: 50, end: 0, translate: "middle-y" },
    },
    { title: "Bottom left", value: { bottom: 0, start: 0 } },
    {
      title: "Bottom center",
      value: { bottom: 0, start: 50, translate: "middle-x" },
    },
    { title: "Bottom right", value: { bottom: 0, end: 0 } },
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(JSON.parse(value));
  };

  const [selectedValue, setSelectedValue] = useState(selectOptions[0].value);

  return (
    <>
      <Select
        value={JSON.stringify(selectedValue)}
        onChange={handleChange}
        mb={3}
        style={{ maxWidth: "200px" }}>
        {selectOptions.map(({ title, value }) => (
          <Select.Option value={JSON.stringify(value)} key={title}>
            {title}
          </Select.Option>
        ))}
      </Select>
      <Prime pos="relative" bg="dark" w={100} style={{ height: "300px" }}>
        <Toast.Container pos="absolute" {...selectedValue} p={3}>
          <Toast open>
            <Toast.Header closeButton>
              <Prime
                as="img"
                src="https://avatars.githubusercontent.com/u/73757404?v=4"
                alt="avatar"
                rounded
                me={2}
                style={{ maxWidth: "24px" }}
              />
              <Prime as="strong" me="auto">
                promethey
              </Prime>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </Toast.Container>
      </Prime>
    </>
  );
}

export function Chat() {
  const [messages, setMessages] = useState([]);

  const [messageText, setMessageText] = useState("");

  const closeMessageToast = (findId) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === findId ? { ...message, open: false } : message,
      ),
    );
  };

  const handleChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleClick = () => {
    if (messageText.length > 0) {
      const newId = uuid();

      setMessages((prev) => [
        ...prev,
        { id: newId, text: messageText, time: new Date(), open: true },
      ]);

      setMessageText("");

      setTimeout(() => closeMessageToast(newId), 5000);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <Prime style={{ maxWidth: "400px" }}>
        <Control
          as="textarea"
          value={messageText}
          onChange={handleChange}
          rows={2}
          placeholder="Please, tell something..."
          onKeyDown={handleKeyDown}
        />
        <Button mt={2} onClick={handleClick}>
          Send message
        </Button>
      </Prime>
      <Toast.Container pos="absolute" m={[0, 3, 3, 0]} bottom={0} end={0}>
        {messages.map(({ id, text, time, open }) => (
          <Toast key={id} open={open} onClose={() => closeMessageToast(id)}>
            <Toast.Header closeButton>
              <Prime
                as="img"
                src="https://avatars.githubusercontent.com/u/73757404?v=4"
                alt="avatar"
                rounded
                me={2}
                style={{ maxWidth: "24px" }}
              />
              <Prime as="strong" me="auto">
                promethey
              </Prime>
              <small>now</small>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
          </Toast>
        ))}
      </Toast.Container>
    </>
  );
}
