export default function TableHeader() {
    return (
        <thead>
        <tr className={"Row"}>
            <th className={"RowItem"}>Environment</th>
            <th className={"RowItem"}>Front End</th>
            <th className={"RowItem"}>Config URL</th>
            <th className={"RowItem"}>Booked by</th>
            <th className={"RowItem"}>Office</th>
            <th className={"RowItem"}>Available from</th>
            <th className={"RowItem"}>Shareable</th>
            <th className={"RowItem"}>Notes</th>
            <th className={"RowItem"}>Action</th>
        </tr>
        </thead>);
}