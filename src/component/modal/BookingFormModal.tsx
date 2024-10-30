import React, {useEffect, useRef, useState} from "react";
import {ModalDialog} from "./ModalDialog";
import {BookingFormModalData} from './types/BookingFormModalData';
import {BookingFormModalProps} from './types/BookingFormModalProps';
import {formatDateForDatabase} from '../../utils/dateHandling';

const initialBookingFormModalData: BookingFormModalData = {
    environmentName: '',
    bookedFor: '',
    office: 'VAN',
    bookingDate: formatDateForDatabase(new Date()),
    isShareable: 'No',
    notes: ''
};

export const BookingFormModal: React.FC<BookingFormModalProps> = (props) => {
    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const [formState, setFormState] = useState<BookingFormModalData>(initialBookingFormModalData);

    useEffect(() => {
        if (props.isOpen && focusInputRef.current) {
            setTimeout(() => {
                focusInputRef.current!.focus();
            }, 0);
        }
    }, [props.isOpen]);

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
        formState.environmentName =props.name;
        props.onSubmit(formState);
    };

    return (
        <ModalDialog
            hasCloseBtn={true}
            isOpen={props.isOpen}
            onClose={props.onClose}>
            <form onSubmit={handleSubmit} className={"Form"}>
                <div className={"FormInputSection"}>
                    <label className={"FormLabel"} htmlFor='environmentName'>Environment: </label>
                    <span className={"FormText"}>{props.name}</span>
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
                <div className={"FormInputSection"}>
                    <button type="submit" className={"FormButton"}>Book Environment</button>
                </div>
            </form>
        </ModalDialog>
    )
}