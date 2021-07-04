/* eslint-disable react/button-has-type */
import React from 'react';

const CustomBtn = ({ customClass, label, type }) => (
  <button className={customClass} type={type || 'button'}>
    {label}
  </button>
);

export default CustomBtn;
