import {EnvironmentData} from "../types/environmentData";
import frontendUrlComponent from "./frontendUrlComponent";

const environmentStatusComponent = (rows: EnvironmentData[]) => {
    return rows.map((row) => {
        const bookingData = row.bookingData;
        const shareable = (row.bookingData?.shareable) ? 'Unlocked RowItem' : 'Locked RowItem';
        const booked = (bookingData) ? 'Booked Row': 'Row'
        return (
            <tr className={booked} key={row.env}>
                <td className={"RowItem"}>{row.env}</td>
                <td className={"RowItem"}>
                    <ul>{frontendUrlComponent(row.metadata.frontendUrls)}</ul>
                </td>
                <td className={"RowItem"}><a href={row.metadata.configManagerUrl.url}>{row.metadata.configManagerUrl.cmName}</a></td>
                <td className={"RowItem"}>{(bookingData) ? bookingData.bookedBy : ''}</td>
                <td className={"RowItem"}>{(bookingData) ? new Date(bookingData.bookingDate).toLocaleDateString("en-uk") : ''}</td>
                <td className={"RowItem"}>{(bookingData) ? bookingData.untilTime : ''}</td>
                <td className={"RowItem"}>{(bookingData) ? bookingData.untilTime : ''}</td>
                <td className={(bookingData)? shareable: 'RowItem'}>{(bookingData) ? 'Yes' : ''}</td>
                <td className={"RowItem"}>{(bookingData) ? bookingData.notes : ''}</td>
                <td className={"RowItem"}>{(bookingData) ? <button>Unbook</button> : ''}</td>
            </tr>
        )
    });
}

export default environmentStatusComponent;