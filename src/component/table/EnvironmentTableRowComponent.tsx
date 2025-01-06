import React from "react";
import {EnvironmentRowProps} from "./types/EnvironmentRowProps";
import {InfoPopup} from "../info/InfoPopup";

export const EnvironmentTableRowComponent: React.FC<EnvironmentRowProps> = ({
                                                                              row,
                                                                              onRelease,
                                                                              onBooking
                                                                            }) => {

  const {env, detail, bookingData, metadata} = row;
  const shareable = (row.bookingData?.shareable === 'Yes') ? 'Unlocked RowItem' : 'Locked RowItem';
  const booked = (bookingData) ? 'Booked Row' : 'Row'

  //Temporary alert to give an indication of where the link will lead. Will be removed when actual urls added
  function tempAlert(env: string, feName: string) {
    return alert(`Will link to ${env} ${feName} url`);
  }


  return (
      <tr className={booked} key={env} role={'row'}>
        <td className={"RowItem"} aria-label="environment name" role={'cell'}>
          {env}
          {(detail) ? <InfoPopup infoText={detail} infoIcon={'?'}/> : null}
        </td>
        <td className={"RowItem"} aria-label="fronted urls" role={'cell'}>
          <div>
            {
              metadata.frontendUrls.map((frontEnd) => {
                return <div key={frontEnd.feName}>
                  <a href={frontEnd.url} target='_blank' rel='noreferrer' onClick={() => tempAlert(env, frontEnd.feName)}>
                    {frontEnd.feName}
                  </a>
                </div>
              })
            }
          </div>
        </td>
        <td className={"RowItem"} aria-label="config manager url" role={'cell'}>
          <a href={metadata.configManagerUrl.url} target='_blank' rel='noreferrer' onClick={() => tempAlert(env, metadata.configManagerUrl.cmName)}>
            {metadata.configManagerUrl.cmName}
          </a>
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
        <td className={`RowItemCenter ${(bookingData) ? shareable : 'RowItem'}`}
            aria-label="can it be shared" role={'cell'}>
          {(bookingData) ? bookingData.shareable : ''}
        </td>
        <td className={"RowItem"} aria-label="relevant notes" role={'cell'}>
          {(bookingData) ? bookingData.notes : ''}
        </td>
        <td className={"RowItem RowItemCenter"}
            aria-label={(bookingData) ? 'release button' : 'booking button'} role={'cell'}>
          {(bookingData) ?
              <button id={`release-${env}-booking`}
                      onClick={() => onRelease(env)}>Release</button> :
              <button id={`open-${env}-booking-form`} onClick={() => onBooking(env)}>Book</button>}
        </td>
      </tr>
  );
}