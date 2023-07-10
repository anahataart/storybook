import React from "react";

import CustomCard from "../../components/material-ui/card/CardDefault";

export default {
  title: "Component/Card",
  component: CustomCard,
};

const Template = (args) => <CustomCard {...args} />;

export const CardComponent = Template.bind({});

CardComponent.args = {
  title: "Card",
  description:
    "Anahata Studios Storybook Card test",
  thumbnail:
    "<PATH to Your IMAGE>",
  firstBtn: "voltar",
  lastBtn: "proximo",
  altText: "Nature",
};