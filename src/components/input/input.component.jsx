import { useEffect, useRef } from 'react';
import { BaseInputGroup, ErrorInputGroup, Input, InputGroupLabel, InputGroupError } from './input.styles';
import { useLocation } from 'react-router-dom';

export const INPUT_GROUP_TYPE_CLASSES = {
  base: 'base',
  error: 'error'
};

const getInput = (inputType = INPUT_GROUP_TYPE_CLASSES.base) =>
({
  [INPUT_GROUP_TYPE_CLASSES.base]: BaseInputGroup,
  [INPUT_GROUP_TYPE_CLASSES.error]: ErrorInputGroup,
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
        <InputGroupLabel shrink={otherProps.value.length}>
          {label}
        </InputGroupLabel>
      )}
      <Input ref={inputRef} placeholder={children} {...otherProps} />
      {error && (
        <InputGroupError shrink={otherProps.value.length}>
          {error}
        </InputGroupError>
      )}
    </CustomInputGroup>
  )
};

export default InputGroup;

