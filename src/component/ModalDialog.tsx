import React, {useRef, useState} from "react";

interface ModalDialogProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

const ModalDialog: React.FC<ModalDialogProps> = ({isOpen, hasCloseBtn, onClose, children}) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalDialogRef = useRef<HTMLDialogElement | null>(null);
    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    return (
        <dialog ref={modalDialogRef} onKeyDown={handleKeyDown}>
            {hasCloseBtn && (
                <button className="modal-close-btn" onClick={handleCloseModal}>
                    Close
                </button>
            )}
            {children}
        </dialog>
    );
}

export default ModalDialog;