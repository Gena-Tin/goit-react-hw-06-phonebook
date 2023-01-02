import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <span>{name}: {number} </span>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
