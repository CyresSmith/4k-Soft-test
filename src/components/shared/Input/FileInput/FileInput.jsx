import TextButton from 'components/shared/button/TextButton/TextButton';
import { FileInputLabel, Input, Text } from './FileInput.styled';
import { Loader } from 'components/shared/button/Button.styled';

import { BiLoaderCircle } from 'react-icons/bi';

const FileInput = ({
  label,
  id,
  onClick = null,
  onChange = null,
  isLoading,
  icon: Icon,
  iconSize = 22,
  color = null,
}) => {
  return (
    <FileInputLabel>
      {isLoading && Icon && (
        <Loader>
          <BiLoaderCircle size={iconSize} />
        </Loader>
      )}
      {!isLoading && Icon && <Icon size={iconSize} color={color} />}
      <Input
        type="file"
        id={id}
        name={id}
        onClick={onClick}
        onChange={onChange}
      />
      <Text>{label}</Text>
    </FileInputLabel>
  );
};

export default FileInput;
