import React from "react";
import { PhoneBookBox, Title, Wrap } from "./PhoneBook.styled";

export const PhoneBook = ({ title, children }) => {
  return (
    <PhoneBookBox>
      <Title>{title}</Title>
      <Wrap>{children}</Wrap>
    </PhoneBookBox>
  );
};
