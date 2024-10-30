import React, {useEffect, useRef, useState} from "react";
import './css/Modal.css'
import {ModalDialogProps} from "./types/ModalDialogProps";

export default function ModalDialog(props:ModalDialogProps) {
    const [isModalOpen, setModalOpen] = useState(props.isOpen);
    const modalDialogRef = useRef<HTMLDialogElement | null>(null);

    const handleCloseModal = () => {
        if (props.onClose) {
            props.onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    useEffect(() => {
        setModalOpen(props.isOpen);
    }, [props.isOpen]);

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
            {props.hasCloseBtn && (
                <button className='modal-close-btn' onClick={handleCloseModal}>
                    Close
                </button>
            )}
            </div>
            {props.children}
        </dialog>
    );
}