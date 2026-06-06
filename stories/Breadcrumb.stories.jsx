import { Breadcrumb, Prime } from "components";

export default {
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
  subcomponents: {
    "Breadcrumb.Item": Breadcrumb.Item,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Displays hierarchical navigation links.",
      },
    },
  },
};

export function Default() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item to="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item to="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function Divider() {
  return (
    <Breadcrumb divider=">">
      <Breadcrumb.Item to="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item to="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}
