import { ErrorMessage } from 'formik';
import { InputBox, Label, InputField, Error } from './Input.styled';

const Input = ({
  type,
  label,
  placeholder,
  id,
  onClick = null,
  onChange = null,
  value = '',
  readOnly = false,
}) => {
  return (
    <InputBox>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputField
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
      <ErrorMessage name={id} component={Error} />
    </InputBox>
  );
};

export default Input;
