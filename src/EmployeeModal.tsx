import React, { useState } from 'react';

// CSS styles
const styles: { [key: string]: React.CSSProperties } = {
  modalBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '0px 200px 0px 30px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    cursor: 'pointer',
    backgroundColor: 'black',
    padding: '4px 10px',
    borderRadius: '28px',
    color: 'white',
    fontWeight: 'bold'
  },
};

interface EmployeeModalProps {
  isVisible: boolean;
  onClose: () => void;
  message: string;
}

/**
 * Composant EmployeeModal
 * 
 * Affiche une modale avec un message personnalisable.
 * 
 * @param {boolean} isVisible - Indique si la modale est visible.
 * @param {function} onClose - Fonction appelée pour fermer la modale.
 * @param {string} message - Message affiché dans la modale.
 */
const EmployeeModal: React.FC<EmployeeModalProps> = ({ isVisible, onClose, message }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div style={styles.modalBackground}>
        <div style={styles.modalContent}>
          <span style={styles.closeButton} onClick={onClose}>X</span>
          <p>{message}</p>
        </div>
      </div>
  );
};

export default EmployeeModal;