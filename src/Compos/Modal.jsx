import React from 'react';

const Modal = ({ isOpen, onCloseModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <button className="absolute top-0 right-0 m-4" onClick={onCloseModal}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
