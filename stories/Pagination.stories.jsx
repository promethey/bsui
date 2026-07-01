import { useState } from "react";
import { Pagination, Prime, Select } from "../src/components";

export default {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  subcomponents: {
    "Pagination.Item": Pagination.Item,
    "Pagination.Link": Pagination.Link,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Pagination component",
      },
    },
  },
};

export function Default() {
  const pages = [1, 2, 3];

  const activePage = 2;

  return (
    <Pagination>
      <Pagination.Item disabled>Previous</Pagination.Item>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          to={`/items/${page}`}
          active={page === activePage}>
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  );
}

export function Icons() {
  const pages = [1, 2, 3];

  return (
    <Pagination>
      <Pagination.Item disabled>&laquo;</Pagination.Item>
      {pages.map((page) => (
        <Pagination.Item key={page} to={`/items/${page}`}>
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Item>&raquo;</Pagination.Item>
    </Pagination>
  );
}

export function Large() {
  const pages = [1, 2, 3];
  const activePage = 1;

  return (
    <Pagination size="lg">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          to={`/items/${page}`}
          active={page === activePage}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export function Small() {
  const pages = [1, 2, 3];
  const activePage = 1;

  return (
    <Pagination size="sm">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          to={`/items/${page}`}
          active={page === activePage}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export function Alignment() {
  const pages = [1, 2, 3];

  const [alignment, setAlignment] = useState("center");

  const jc = ["start", "center", "end"];

  const handleAlignChange = (event) => {
    const value = event.target.value;

    setAlignment(value);
  };

  return (
    <>
      <Pagination flex={{ justifyContent: alignment }} mb={3}>
        <Pagination.Item disabled>Previous</Pagination.Item>
        {pages.map((page) => (
          <Pagination.Item key={page} to={`/items/${page}`}>
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Item>Next</Pagination.Item>
      </Pagination>
      <Select
        defaultValue="center"
        onChange={handleAlignChange}
        style={{ maxWidth: "140px" }}>
        {jc.map((justifyContent) => (
          <Select.Option value={justifyContent}>{justifyContent}</Select.Option>
        ))}
      </Select>
    </>
  );
}
