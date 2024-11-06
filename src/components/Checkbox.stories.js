import Checkbox from "./Checkbox";

export default {
  title: "My Components/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const CheckboxDiscouraged = {
  args: {
    messageOn: "Vaya... me has seleccionado :(",
    messageOff: "No me selecciones, no quiero trabajar",
  },
};

export const CheckboxAnimed = {
  args: {
    messageOn: "¡Yuhu me has seleccionado :)",
    messageOff: "¿Me seleccionas :)?",
    backgroundColor: "#025f0a",
  },
};
