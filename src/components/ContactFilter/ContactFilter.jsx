import React from "react";

import { Filter, Label, Title, Input } from "./ContactFilter.styled";

export const ContactFilter = ({ value, onChange }) => {
  return (
    <Filter>
      <Label>
        <Title>Filter</Title>
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Filter>
  );
};
