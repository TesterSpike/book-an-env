import React from "react";
import {EnvironmentRowProps} from "./types/EnvironmentRowProps";
import {InfoPopup} from "../info/InfoPopup";

export const EnvironmentTableRowComponent: React.FC<EnvironmentRowProps> = (props) => {
    const row = props.row;

    const bookingData = row.bookingData;
    const shareable = (row.bookingData?.shareable === 'Yes') ? 'Unlocked RowItem' : 'Locked RowItem';
    const booked = (bookingData) ? 'Booked Row' : 'Row'

    return (
        <tr className={booked} key={row.env} role={'row'}>
            <td className={"RowItem"} aria-label="environment name" role={'cell'}>
                {row.env}
                {(row.detail) ? <InfoPopup infoText={row.detail} infoIcon={'?'}/> : null}
            </td>
            <td className={"RowItem"} aria-label="fronted urls" role={'cell'}>
                <div>
                    {
                        row.metadata.frontendUrls.map((frontEnd) => {
                            return <div key={frontEnd.feName}><a href={frontEnd.url}>{frontEnd.feName}</a></div>
                        })
                    }
                </div>
            </td>
            <td className={"RowItem"} aria-label="config manager url" role={'cell'}>
                <a href={row.metadata.configManagerUrl.url}>{row.metadata.configManagerUrl.cmName}</a>
            </td>
            <td className={"RowItem"} aria-label="person who booked" role={'cell'}>
                {(bookingData) ? bookingData.bookedBy : ''}
            </td>
            <td className={"RowItem"} aria-label="person's office" role={'cell'}>
                {(bookingData) ? bookingData.office : ''}
            </td>
            <td className={"RowItem"} aria-label="booked until time" role={'cell'}>
                {(bookingData) ? bookingData.untilTime.toLocaleString() : ''}
            </td>
            <td className={`RowItemCenter ${(bookingData) ? shareable : 'RowItem'}`} aria-label="can it be shared" role={'cell'}>
                {(bookingData) ? bookingData.shareable : ''}
            </td>
            <td className={"RowItem"} aria-label="relevant notes" role={'cell'}>
                {(bookingData) ? bookingData.notes : ''}
            </td>
            <td className={"RowItem RowItemCenter"} aria-label={(bookingData) ? 'release button' : 'booking button'} role={'cell'}>
                {(bookingData) ?
                    <button id={`release-${row.env}-booking`} onClick={() => props.onRelease(row.env)}>Release</button> :
                    <button id={`open-${row.env}-booking-form`} onClick={() => props.onBooking(row.env)}>Book</button>}
            </td>
        </tr>
    );
}