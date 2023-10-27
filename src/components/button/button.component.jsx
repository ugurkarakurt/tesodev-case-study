import { BaseButton, SubmitButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  submit: "submit"
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.submit]: SubmitButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps} to={otherProps.link} $disabled={otherProps.disabled}>{children}</CustomButton>;
};

export default Button;
