import { useEffect, useRef } from 'react';
import { BaseInputGroup, Input, InputGroupLabel, InputGroupError } from './input.styles';
import { useLocation } from 'react-router-dom';

export const INPUT_GROUP_TYPE_CLASSES = {
  base: 'base',
};

const getInput = (inputType = INPUT_GROUP_TYPE_CLASSES.base) =>
({
  [INPUT_GROUP_TYPE_CLASSES.base]: BaseInputGroup,
}[inputType]);

const InputGroup = ({ children, inputType, label, error, ...otherProps }) => {
  const CustomInputGroup = getInput(inputType);
  const location = useLocation();
  const path = location.pathname.startsWith('/list') || location.pathname.startsWith('/');

  const inputRef = useRef(null);

  useEffect(() => {
    if (path) {
      inputRef.current.focus();
    }
  }, [path]);

  return (
    <CustomInputGroup>
      {label && (
        <InputGroupLabel>
          {label}
        </InputGroupLabel>
      )}
      <Input $error={error} ref={inputRef} placeholder={children} {...otherProps} />
      {error && (
        <InputGroupError>
          {error}
        </InputGroupError>
      )}
    </CustomInputGroup>
  )
};


export default InputGroup;

