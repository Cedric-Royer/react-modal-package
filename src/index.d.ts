declare module 'react-modal-component-package' {
    import { FC } from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      children: React.ReactNode;
    }
  
    const Modal: FC<ModalProps>;
  
    export default Modal;
  }