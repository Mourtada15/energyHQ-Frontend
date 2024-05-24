import React from 'react';
import Modal from 'react-modal';
import './ConfirmationModal.css';

Modal.setAppElement('#root');

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal className="model-customized" isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this item?</p>
      <div className="model-customized-buttons">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onRequestClose}>No</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
