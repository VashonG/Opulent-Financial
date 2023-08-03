import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    state: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
    level: {
      options: ["primary", "inline", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Button",
    state: "disabled",
    level: "primary",
    className: {},
  },
};
