import React from 'react';

const CustomInput = ({
  label,
  register,
  id,
  required,
  type,
  placeholder,
  labelText,
  classInput,
  errors,
  pattern,
  onlyNumber,
}) => {
  const inputType = type || 'text';
  return (
    <div className="input-wrapper">
      {labelText && (
        <label className="input-label">
          <span>{labelText}</span>
        </label>
      )}
      <input
        type={inputType}
        placeholder={placeholder}
        className={`input ${classInput}`}
        onWheel={(ev) => ev.target.blur()}
        {...register(id, { required, pattern })}
      />
      {errors && (
        <span className="input-required">
          This field is required! {onlyNumber ? 'Numbers only!' : ''}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
