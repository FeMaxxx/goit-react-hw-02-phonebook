import React from "react";

import {
  ContactListBox,
  Item,
  Name,
  Number,
  Button,
} from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListBox>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ContactListBox>
  );
};
