import Udpater from 'components/Updater/Updater';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setcurrentName] = useState(null);
  const [currentNumber, setcurrentNumber] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    let visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  const openUpdater = (id, name, number) => {
    setCurrentId(id);
    setcurrentName(name);
    setcurrentNumber(number);
    setIsOpen(true);
  };
  const closeUpdater = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <Udpater
          currentId={currentId}
          currentName={currentName}
          currentNumber={currentNumber}
          closeUpdater={closeUpdater}
        />
      )}
      {!isOpen && (
        <List>
          {filterContacts().map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              updater={() =>
                openUpdater(contact.id, contact.name, contact.number)
              }
            />
          ))}
        </List>
      )}
    </div>
  );
};
