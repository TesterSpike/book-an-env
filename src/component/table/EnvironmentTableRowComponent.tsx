import {EnvironmentData} from "../../types/environmentData";
import {BookingFormModalData} from '../modal/types/BookingFormModalData';
import FrontendUrlComponent from "../FrontendUrlComponent";
import {Button, Icon, Popup} from 'semantic-ui-react'
import React, {useState} from "react";
import BookingFormModal from '../modal/BookingFormModal';

export default function EnvironmentTableRowComponent(row: EnvironmentData,
                                                     onRelease: {
                                                         (env: string): void;
                                                         (arg0: string): void
                                                     },
                                                     onBooking: {
                                                         (bookingData: BookingFormModalData): void;
                                                         (arg0: BookingFormModalData): void
                                                     }) {
    const [isBookingFormModalOpen, setBookingFormModalOpen] = useState<boolean>(false);

    const handleOpenBookingFormModal = () => {
        setBookingFormModalOpen(true);
    };

    const handleCloseBookingFormModal = () => {
        setBookingFormModalOpen(false);
    };

    const handleFormSubmit = (data: BookingFormModalData): void => {
        onBooking(data);
        handleCloseBookingFormModal();
    };

    const bookingData = row.bookingData;
    const shareable = (row.bookingData?.shareable) ? 'Unlocked RowItem' : 'Locked RowItem';
    const booked = (bookingData) ? 'Booked Row' : 'Row'

    return (
        <tr className={booked} key={row.env}>
            <td className={"RowItem"}>{row.env} <Popup className={"Popup"}
                                                       content={row.detail}
                                                       trigger={
                                                           <Icon className={'PopupTrigger'}
                                                                 name={'help'}>{(row.detail !== '') ? '?' : ''}
                                                           </Icon>}/>
            </td>
            <td className={"RowItem"}>
                {FrontendUrlComponent(row.metadata.frontendUrls)}
            </td>
            <td className={"RowItem"}><a
                href={row.metadata.configManagerUrl.url}>{row.metadata.configManagerUrl.cmName}</a></td>
            <td className={"RowItem"}>{(bookingData) ? bookingData.bookedBy : ''}</td>
            <td className={"RowItem"}>{(bookingData) ? new Date(bookingData.bookingDate).toLocaleDateString("en-uk") : ''}</td>
            <td className={"RowItem"}>{(bookingData) ? bookingData.untilTime : ''}</td>
            <td className={"RowItem"}>{(bookingData) ? bookingData.untilTime : ''}</td>
            <td className={`RowItemCenter ${(bookingData) ? shareable : 'RowItem'}`}>{(bookingData) ? 'Yes' : ''}</td>
            <td className={"RowItem"}>{(bookingData) ? bookingData.notes : ''}</td>
            <td className={"RowItem RowItemCenter"}>{(bookingData) ?
                <Button id={`release-${row.env}-booking`} onClick={() => onRelease(row.env)}>Release</Button> :
                <Button id={`open-${row.env}-booking-form`} onClick={handleOpenBookingFormModal}>Book</Button>}</td>
            <BookingFormModal
                name={row.env}
                isOpen={isBookingFormModalOpen}
                onSubmit={handleFormSubmit}
                onClose={handleCloseBookingFormModal}/>
        </tr>
    );
}