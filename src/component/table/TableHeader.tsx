import React from 'react';

export const TableHeader: React.FC = () => {
    return (
        <thead>
        <tr className={'Row'} role={'row'}>
            <th className={'RowItem'} role={'columnheader'}>Environment</th>
            <th className={'RowItem'} role={'columnheader'}>Front End</th>
            <th className={'RowItem'} role={'columnheader'}>Config URL</th>
            <th className={'RowItem'} role={'columnheader'}>Booked by</th>
            <th className={'RowItem'} role={'columnheader'}>Office</th>
            <th className={'RowItem'} role={'columnheader'}>Available from</th>
            <th className={'RowItem'} role={'columnheader'}>Shareable</th>
            <th className={'RowItem'} role={'columnheader'}>Notes</th>
            <th className={'RowItem'} role={'columnheader'}>Action</th>
        </tr>
        </thead>);
}