import React, {useEffect, useRef, useState} from "react";
import ModalDialog from "./ModalDialog";

interface BookingFormModalData {
    environmentName: string;
    bookedFor: string;
    office: string;
    bookingDate: string;
    isShareable: boolean;
    notes: string;
}

const initialBookingFormModalData: BookingFormModalData = {
    environmentName: '',
    bookedFor: '',
    office: '',
    bookingDate: '',
    isShareable: true,
    notes: ''
};


interface BookingFormModalProps {
    isOpen: boolean;
    onSubmit: (data: BookingFormModalData) => void;
    onClose: () => void;
}

const BookingFormModal: React.FC<BookingFormModalProps> = ({isOpen, onClose, onSubmit}) => {
    const focusInputRef = useRef<HTMLInputElement | null>(null);

    const [formState, setFormState] = useState<BookingFormModalData>(initialBookingFormModalData);

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            setTimeout(() => {
                focusInputRef.current!.focus();
            }, 0);
        }
    }, [isOpen]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ): void => {
        const {name, value} = event.target;
        setFormState((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit(formState);
        setFormState(initialBookingFormModalData);
    };

    return (
        <ModalDialog
            hasCloseBtn={true}
            isOpen={isOpen}
            onClose={onClose}>
            <form onSubmit={handleSubmit} className={"Form"}>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='Environment'>Environment: </label>
                    <select className={"FormInput"} name='Environment' aria-describedby='Environment name'
                            required={true} onChange={handleInputChange}>
                        <option id='TST1'>TST1</option>
                        <option id='TST2'>TST2</option>
                        <option id='TST3'>TST3</option>
                    </select>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='Name'>Name: </label>
                    <input className={"FormInput"} name='Name' aria-label='Name'
                           aria-describedby='Name of the person booking'
                           type='text'
                           onChange={handleInputChange}/>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='Office'>Office: </label>
                    <select className={"FormInput"} name='Office'
                            aria-describedby='Office of the person making the booking'
                            onChange={handleInputChange}>
                        <option id='LDN'>LDN</option>
                        <option id='VAN'>VAN</option>
                        <option id='NYC'>NYC</option>
                    </select>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='BookingDate'>Booking Date: </label>
                    <input className={"FormInput"} name='BookingDate' aria-describedby='The date of the booking'
                           type='date'
                           onChange={handleInputChange}/>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='Shareable'>Shareable? </label>
                    <input className={"FormInput"} name='Shareable'
                           aria-describedby='Is this ennvironment shareable?'
                           type='checkbox'
                           onChange={handleInputChange}/>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='Notes'>Notes: </label>
                    <textarea className={"FormInput"} name='Notes'
                              aria-describedby='Description of anything that may be important to other people who want to use the environment'
                              cols={30} rows={5}
                              onChange={handleInputChange}/>
                </div>
                <div className={"FormButtonSection"}>
                    <button type="submit" className={"FormButton"}>Book Environment</button>
                </div>
            </form>
        </ModalDialog>
    )
}

export default BookingFormModal;