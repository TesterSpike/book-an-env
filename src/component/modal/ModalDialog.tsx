import React, {useEffect, useRef, useState} from "react";
import './css/Modal.css'

interface ModalDialogProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

export default function ModalDialog({isOpen, hasCloseBtn = true, onClose, children}:ModalDialogProps) {
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

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalDialogRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog className= 'modal-dialog' ref={modalDialogRef} onKeyDown={handleKeyDown}>
            <div className={'modal-header'}>
            {hasCloseBtn && (
                <button className='modal-close-btn' onClick={handleCloseModal}>
                    Close
                </button>
            )}
            </div>
            {children}
        </dialog>
    );
}