import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { changeValue } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

function Filter() {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  return (
    <label>
      Find contact by name
      <input
        className={css.inputFilter}
        type="text"
        value={filterValue}
        onChange={e => dispatch(changeValue(e.target.value))}
      />
    </label>
  );
}

export default Filter;