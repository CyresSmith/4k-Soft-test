import { useTransition } from '@react-spring/web';

import { PopupBox } from './Popup.styled';

const Popup = ({ children, isOpen }) => {
  const transition = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
      config: { duration: 150 },
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
      config: { duration: 150 },
    },
  });

  return transition((style, isOpen) => (
    <>{isOpen ? <PopupBox style={style}>{children}</PopupBox> : null}</>
  ));
};

export default Popup;
