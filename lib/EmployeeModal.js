"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// CSS styles
const styles = {
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
/**
 * Composant EmployeeModal
 *
 * Affiche une modale avec un message personnalisable.
 *
 * @param {boolean} isVisible - Indique si la modale est visible.
 * @param {function} onClose - Fonction appelée pour fermer la modale.
 * @param {string} message - Message affiché dans la modale.
 */
const EmployeeModal = ({ isVisible, onClose, message }) => {
    if (!isVisible) {
        return null;
    }
    return (react_1.default.createElement("div", { style: styles.modalBackground },
        react_1.default.createElement("div", { style: styles.modalContent },
            react_1.default.createElement("span", { style: styles.closeButton, onClick: onClose }, "X"),
            react_1.default.createElement("p", null, message))));
};
exports.default = EmployeeModal;
