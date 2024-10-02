import React, {useEffect, useRef, useState} from "react";
import ModalDialog from "./ModalDialog";

export interface BookingFormModalData {
    environmentName: string;
    bookedFor: string;
    office: string;
    bookingDate: string;
    isShareable: string;
    notes: string;
}

function formatDate(_date: Date): string {
    return `${_date.getFullYear()}-${(_date.getMonth() + 1).toString().padStart(2, '0')}-${(_date.getDate()).toString().padStart(2, '0')}`
}

const initialBookingFormModalData: BookingFormModalData = {
    environmentName: '',
    bookedFor: '',
    office: '',
    bookingDate: formatDate(new Date()),
    isShareable: '',
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
        console.log(`form state at submit: ${JSON.stringify(formState)}`);
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
                    <label className={"FormLabel"} htmlFor='environmentName'>Environment: </label>
                    <select id='environmentName' className='FormInput' name='environmentName' aria-describedby='Environment name'
                            required={true} value={formState.environmentName} onChange={handleInputChange}>
                        <option id='TST1'>TST1</option>
                        <option id='TST2'>TST2</option>
                        <option id='TST3'>TST3</option>
                    </select>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='bookedFor'>Name: </label>
                    <input className={"FormInput"} name='bookedFor' aria-label='Name'
                           aria-describedby='Name of the person booking'
                           type='text'
                           value={formState.bookedFor}
                           onChange={handleInputChange}/>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='office'>Office: </label>
                    <select className={"FormInput"} name='office'
                            aria-describedby='Office of the person making the booking'
                            value={formState.office}
                            onChange={handleInputChange}>
                        <option id='LDN'>LDN</option>
                        <option id='VAN'>VAN</option>
                        <option id='NYC'>NYC</option>
                    </select>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='bookingDate'>Booking Date: </label>
                    <input className={"FormInput"} name='bookingDate' aria-describedby='The date of the booking'
                           type='date'
                           value={formState.bookingDate}
                           onChange={handleInputChange}/>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='isShareable'>Shareable? </label>
                    <select className={"FormInput"} name='isShareable'
                           aria-describedby='Is this ennvironment shareable?'
                           value={formState.isShareable}
                           onChange={handleInputChange}>
                            <option id='isShareable-Yes'>Yes</option>
                            <option id='isShareable-No'>No</option>
                    </select>
                </div>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='notes'>Notes: </label>
                    <textarea className={"FormInput"} name='notes'
                              aria-describedby='Description of anything that may be important to other people who want to use the environment'
                              cols={30} rows={5}
                              value={formState.notes}
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