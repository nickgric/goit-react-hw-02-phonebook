import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { generateName } from './utils/randomname';

import { Section } from './Section';
import { AddContact } from './AddContact';
import { Filter } from './Filter';
import { Contacts } from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '096-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '097-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '098-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
    ],
    filter: '',
  };

  filterContacts = input => {
    this.setState({ filter: input });
  };

  addContact = (name, number, id) => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts!`);
        return;
      } else {
        const newState = {
          contacts: [{ name, number, id }, ...prevState.contacts],
        };
        return newState;
      }
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: [...newContacts] };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const {
      submitHandler,
      inputHandler,
      filterContacts,
      addContact,
      deleteContact,
    } = this;

    return (
      <>
        <h1>React-HW02_02 @nickgric</h1>
        <Section title="Phonebook">
          <AddContact
            submitHandler={submitHandler}
            inputHandler={inputHandler}
            addContact={addContact}
          />
        </Section>
        <Section title="Contacts">
          <Filter filterContacts={filterContacts} />
          <Contacts
            contacts={contacts}
            filter={filter}
            deleteContact={deleteContact}
          />
        </Section>
      </>
    );
  }
}
