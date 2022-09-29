import React, { ReactNode, useEffect } from "react";
import Button from "./Button";

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
  isOpen: boolean;
  modalTitle: string;
}
const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  isOpen,
  modalTitle,
}) => {
  useEffect(() => {
    const close = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        setTimeout(() => {
          handleClose();
        }, 90);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isOpen) return null;
  return (
    <div onClick={handleClose} className="container">
      <div className="wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">{modalTitle}</div>
          <div className="closable-button" onClick={handleClose}>
            x
          </div>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <Button type="primary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
