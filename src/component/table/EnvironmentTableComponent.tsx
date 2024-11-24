import './css/InfoTable.css';
import {EnvironmentData} from "./types/environmentData";
import {TableHeader} from "./TableHeader";
import {EnvironmentTableRowComponent} from "./EnvironmentTableRowComponent";
import {EnvironmentTableProps} from "./types/EnvironmentTableProps";
import React from "react";

export const EnvironmentTableComponent: React.FC<EnvironmentTableProps> = (props)=> {
    return (
        <table>
            <TableHeader/>
            <tbody id="environmentStatusBody">
            {
                props.data.map((row: EnvironmentData) =>
                    <EnvironmentTableRowComponent key={row.env} row={row} onRelease={props.onRelease} onBooking={props.onBooking}/>)
            }
            </tbody>
        </table>
    );
}
