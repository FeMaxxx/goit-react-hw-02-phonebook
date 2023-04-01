import React from "react";
import { ContactFilter } from "components/ContactFilter";
import { ContactList } from "components/ContactList";
import { ContactsBox, Title } from "./Contacts.styled";

export const Contacts = ({ contacts, filter, onDeleteContact, value }) => {
  return (
    <ContactsBox>
      <Title>Contacts</Title>
      <ContactFilter onChange={filter} value={value} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </ContactsBox>
  );
};
