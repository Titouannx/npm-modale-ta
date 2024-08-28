import React from 'react';
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
declare const EmployeeModal: React.FC<EmployeeModalProps>;
export default EmployeeModal;
