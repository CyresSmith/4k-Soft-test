import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { CgClose } from 'react-icons/cg';

import { useLockBodyScroll } from 'react-use';
import { useTransition } from '@react-spring/web';

import IconButton from '../button/IconButton';

import { Backdrop, ModalHeader, ModalWindow, Title } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, isOpen, title = '', children = null }) => {
  useLockBodyScroll();

  const transition = useTransition(isOpen, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      config: { duration: 250 },
    },
    leave: {
      opacity: 0,
      config: { duration: 250 },
    },
  });

  const closeModal = useCallback(
    ({ code, target, currentTarget }) => {
      if (target === currentTarget || code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal, toggleModal]);

  return transition((style, isOpen) => (
    <>
      {isOpen
        ? createPortal(
            <Backdrop style={style} onClick={closeModal}>
              <ModalWindow>
                <ModalHeader>
                  {title !== '' && <Title>{title}</Title>}
                  <IconButton
                    icon={CgClose}
                    iconSize={24}
                    ariaLabel="close button"
                    onClick={toggleModal}
                  />
                </ModalHeader>
                {children}
              </ModalWindow>
            </Backdrop>,
            modalRoot
          )
        : null}
    </>
  ));
};

export default Modal;
