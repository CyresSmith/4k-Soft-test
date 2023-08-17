import React from 'react';
import { ButtonBox, Text } from './TextButton.styled';
import theme from 'theme';

const TextButton = ({
  id = null,
  color = null,
  icon: Icon,
  iconSize = 34,
  children,
  onClick = null,
}) => {
  return (
    <ButtonBox id={id} color={color} onClick={onClick}>
      {Icon && <Icon size={iconSize} color={color} />}
      <Text color={color}>{children}</Text>
    </ButtonBox>
  );
};

export default TextButton;
