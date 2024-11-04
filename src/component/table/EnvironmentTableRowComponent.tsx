import {BookingFormModalData} from '../modal/types/BookingFormModalData';
import {Button, Icon, Popup} from 'semantic-ui-react'
import React, {useState} from "react";
import {BookingFormModal} from '../modal/BookingFormModal';
import {EnvironmentRowProps} from "./types/EnvironmentRowProps";

export const EnvironmentTableRowComponent: React.FC<EnvironmentRowProps> = (props) => {
    const row = props.row;

    const [isBookingFormModalOpen, setBookingFormModalOpen] = useState<boolean>(false);

    const handleOpenBookingFormModal = () => {
        setBookingFormModalOpen(true);
    };

    const handleCloseBookingFormModal = () => {
        setBookingFormModalOpen(false);
    };

    const handleFormSubmit = (data: BookingFormModalData): void => {
        props.onBooking(data);
        handleCloseBookingFormModal();
    };

    const bookingData = row.bookingData;
    const shareable = (row.bookingData?.shareable === 'Yes') ? 'Unlocked RowItem' : 'Locked RowItem';
    const booked = (bookingData) ? 'Booked Row' : 'Row'

    return (
        <tr className={booked} key={row.env}>
            <td className={"RowItem"} aria-label="environment name">{row.env}
                <Popup className={"Popup"}
                       content={row.detail}
                       trigger={
                           <Icon id={`help-${row.env}`} className={'PopupTrigger'} name={'help'}>
                               {(row.detail !== '') ? '?' : ''}
                           </Icon>}/>
            </td>
            <td className={"RowItem"} aria-label="fronted urls">
                <div>
                    {
                        row.metadata.frontendUrls.map((frontEnd) => {
                            return <div key={frontEnd.feName}><a href={frontEnd.url}>{frontEnd.feName}</a></div>
                        })
                    }
                </div>
            </td>
            <td className={"RowItem"} aria-label="config manager url">
                <a href={row.metadata.configManagerUrl.url}>{row.metadata.configManagerUrl.cmName}</a>
            </td>
            <td className={"RowItem"} aria-label="person who booked">
                {(bookingData) ? bookingData.bookedBy : ''}
            </td>
            <td className={"RowItem"} aria-label="person's office">
                {(bookingData) ? bookingData.office : ''}
            </td>
            <td className={"RowItem"} aria-label="booked until time">
                {(bookingData) ? bookingData.untilTime.toLocaleString() : ''}
            </td>
            <td className={`RowItemCenter ${(bookingData) ? shareable : 'RowItem'}`} aria-label="can it be shared">
                {(bookingData) ? bookingData.shareable : ''}
            </td>
            <td className={"RowItem"} aria-label="relevant notes">
                {(bookingData) ? bookingData.notes : ''}
            </td>
            <td className={"RowItem RowItemCenter"} aria-label={(bookingData) ? 'release button' : 'booking button'}>
                {(bookingData) ?
                    <Button id={`release-${row.env}-booking`}
                            onClick={() => props.onRelease(row.env)}>Release</Button> :
                    <Button id={`open-${row.env}-booking-form`} onClick={handleOpenBookingFormModal}>Book</Button>}
            </td>
            <BookingFormModal
                name={row.env}
                isOpen={isBookingFormModalOpen}
                onSubmit={handleFormSubmit}
                onClose={handleCloseBookingFormModal}/>
        </tr>
    );
}