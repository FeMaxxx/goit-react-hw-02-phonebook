import React, { Component } from "react";
import { PhoneBook } from "components/PhoneBook";
import { PBForm } from "components/PBForm";
import { Contacts } from "components/Contacts";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const haveContact = contacts.some((contact) => {
      return contact.name === name;
    });

    if (haveContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalized = filter.toLowerCase();

    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalized);
    });
  };

  deleteContact = (ContactId) => {
    this.setState((precState) => ({
      contacts: precState.contacts.filter(
        (contact) => contact.id !== ContactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <PhoneBook title="PhoneBook">
          <PBForm onSubmit={this.addContact} />
          <Contacts
            contacts={visibleContacts}
            filter={this.changeFilter}
            onDeleteContact={this.deleteContact}
            value={filter}
          />
        </PhoneBook>
      </>
    );
  }
}

export { App };
