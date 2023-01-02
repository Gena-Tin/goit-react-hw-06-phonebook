import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactList/ContactItem';
import { getFilterValue, getContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number}></ContactItem>
      ))}
    </ul>
  );
}

export default ContactList;