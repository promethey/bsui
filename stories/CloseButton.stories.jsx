// @ts-nocheck
import { CloseButton, Prime } from "components";

export default {
  title: "Components/CloseButton",
  component: CloseButton,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Dismisses or closes related content through a compact action control",
      },
    },
  },
};

export function Default() {
  const handleClick = (event) => {
    event.preventDefault();
    alert("Click!");
  };

  return <CloseButton onClick={handleClick} />;
}

export function White() {
  return <CloseButton white />;
}

export function Disabled() {
  return <CloseButton disabled />;
}
